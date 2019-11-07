// Running a custom server instead of the built in server.
// If you wanted to go back to the older built in server just go to the package.json,
// and change the dev script back to "next dev"
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser'); // This is a middlware that will make the req availiable on the req.body

const dev = process.env.NODE_ENV !== 'production'; //Checking what enviorment we are in
const app = next({ dev }); //Then creating our presentation of our application using next framework and passing in what enviorment we are in.
const handle = app.getRequestHandler(); // Creating handlers handling our requests and needs it to serve us the correct pages.

const filePath = './data.json';
const fs = require('fs'); //This is a package that allows you to write to files
const path = require('path');
const moviesData = require(filePath);

app.prepare().then(() => { // Compile our code

  const server = express(); //Creating the express server
  server.use(bodyParser.json()) //Telling the server to use this middlware

  /*___GETS___*/

  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData);
  });

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = moviesData.find(m => m.id === id);

    return res.json(movie);
  })

  /*____________*/

  /*___POSTS___*/

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body;
    moviesData.push(movie);

    const pathToFile = path.join(__dirname, filePath); // This addes the full path to our data
    const stringifiedData = JSON.stringify(movie, null, 2); //Null and 2 will make so that it's not all on one line when it's outputted 

    fs.writeFile(pathToFile, stringifiedData, (error) => {
      if (error) {
        return res.status(422).send(error) //422 Something is wrong with the data send will send this to the client
      }
    }) //Three things need to be specified for this 1. Path to file 2.Data 3.Function if we get errors
    return res.json('Movie has been successfuly added!');
  })

  /*____________*/

  /*___DELETES___*/

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: `Deleting movie of id: ${id}` });
  })

  /*____________*/


  server.get('*', (req, res) => {
    //* is handling all request's coming to our server.
    //Next js is handling the requests for us and providing pages where we are navigating to.
    return handle(req, res); //This is going to parse our route and handle the correct route it needs to go to.
  });

  const PORT = process.env.PORT || 3000; // We are trying to get the port from enviorment variable if that does not exist use 3000

  server.listen(PORT, (err) => {
    // Listining to the requests from the handle server middlware  I could use this server.use(handle) and not add the code above
    if (err) throw err;
    console.log('> Ready on port ' + PORT);
  });
});


  //Sending an HTML page example
	// server.get('/faq', (req, res) => {
  //   res.send(`
  //   <html>
  //     <head></head>
  //     <body>   
  //       <h1>Hello World</h1>
  //     </body>
  //   </html>
  //     `);
	// });