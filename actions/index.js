import axios from 'axios'

const BASE_URL = "http://localhost:3000"

const MOVIE_DATA = []

const CATEGORY_DATA = [
  { id: 1, name: 'Drama' },
  { id: 2, name: 'Action' },
  { id: 3, name: 'Adventure' },
  { id: 4, name: 'Historical' }
]


/*____GETS____*/
export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      reject("Cannot fetch data on getCategories"); // Error handling
    }, 2000);
  })
}

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
}

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

/*____POSTS____*/

export const createMovie = (movie) => {
  return new Promise((resolve, reject) => {
    //Add Id to the movie being created
    //Create random number, set it to a string with 36 bytes encoding, and then shorten it to only five characters result = ka7b3
    movie.id = Math.random().toString(36).substr(2, 7);
    MOVIE_DATA.push(movie)
    setTimeout(() => {
      resolve(MOVIE_DATA);
      reject("Cannot fetch data on createMovie"); // Error handling
    }, 2000);
  })
}

