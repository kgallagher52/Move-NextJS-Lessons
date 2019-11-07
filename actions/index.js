const MOVIE_DATA = [
  {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 4.8,
    genre: 'drama',
    image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
    imageCover:'https://images.unsplash.com/photo-1527538079466-b6297ad15363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: '2',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 4.7,
    genre: 'action, crime, drama',
    image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
    imageCover:'https://images.unsplash.com/photo-1420802320972-ac173d873ed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: '3',
    name: 'Lord of the Rings',
    releaseYear: 2004,
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
    imageCover:'https://images.unsplash.com/photo-1567175220991-788d36f3c17a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  }
]

const CATEGORY_DATA = [
  {id:1,name: 'Drama'},
  {id:2,name: 'Action'},
  {id:3,name: 'Adventure'},
  {id:4,name: 'Historical'}
]

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      reject("Cannot fetch data on getCategories"); // Error handling
    }, 2000);
  })
}

//Simulate real life scenerio
export const getMovies = () => {
  //Creating a async simulation for the data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA);
      reject("Cannot fetch data on getMovies"); // Error handling
    }, 2000);
  })
}

export const createMovie = (movie) => {
  return new Promise((resolve, reject) => {
    //Add Id to the movie being created
    //Create random number, set it to a string with 36 bytes encoding, and then shorten it to only five characters result = ka7b3
    movie.id = Math.random().toString(36).substr(2,7);
    MOVIE_DATA.push(movie)
    setTimeout(() => {
      resolve(MOVIE_DATA);
      reject("Cannot fetch data on createMovie"); // Error handling
    }, 2000);
  })
}

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex((movie) => {
      return movie.id === id
    })
    const movie = MOVIE_DATA[movieIndex];
    setTimeout(() => {
      resolve(movie);
      reject("Cannot fetch data on getMovieById"); // Error handling
    }, 50);
  })
}
  
