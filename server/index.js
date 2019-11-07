// Running a custom server instead of the built in server.
// If you wanted to go back to the older built in server just go to the package.json,
// and change the dev script back to "next dev"
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'; //Checking what enviorment we are in
const app = next({ dev }); //Then creating our presentation of our application using next framework and passing in what enviorment we are in.
const handle = app.getRequestHandler(); // Creating handlers handling our requests and needs it to serve us the correct pages.

app.prepare().then(() => {
	// Compile our code

	const server = express(); //Creating the express server

/*___GETS___*/ 
	server.get('/api/v1/movies', (req, res) => {
		res.json({ message: 'Hello World' });
	});

	server.get('*', (req, res) => {
		//* is handling all request's coming to our server.
		//Next js is handling the requests for us and providing pages where we are navigating to.
		return handle(req, res); //This is going to parse our route and handle the correct route it needs to go to.
  });
  
/*___POSTS___*/ 
  server.post('/api/v1/movies', (req,res) => {
    res.json({ message: 'Saving Movie' });
  })

/*___UPDATES___*/
  server.patch('/api/v1/movies/:id', (req,res) => {
    const { id } = req.params
    res.json({ message:`Updating movie of id: ${id}` });
  })

/*___DELETES___*/
  server.delete('/api/v1/movies/:id', (req,res) => {
    const { id } = req.params
    res.json({ message:`Deleting movie of id: ${id}` });
  })

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