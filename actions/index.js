import axios from 'axios'

const BASE_URL = "http://localhost:3000"

const MOVIE_DATA = []

const CATEGORY_DATA = [
  { id: 1, name: 'all' },
  { id: 2, name: 'drama' },
  { id: 3, name: 'action' },
  { id: 4, name: 'adventure' },
  { id: 5, name: 'historical' }
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
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
}

export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data);
}

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/posts/${id}`).then(res => res.data);
}

/*____POSTS____*/

export const createMovie = (movie) => {
  //Create random number, set it to a string with 36 bytes encoding, and then shorten it to only five characters result = ka7b3
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
}
/*____UPDATES____*/

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data)
}

/*____DELETES____*/

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
}

