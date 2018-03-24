import axios from 'axios'
const API_URL = 'http://localhost:1738/api/movies'

export const getMovies = () => {
  return axios.get(API_URL)
}

export const getQueriedMovies = (query) => {
  return axios.get(`${API_URL}?q=${query}`)
}

export const postMovie = (movie) => {
  axios.post(API_URL, movie)
    .catch(err => {
      console.error(err);
    });
}

export const deleteMovie = (id) => {
  axios.delete(`${API_URL}/${id}`)
    .then(res => {
      console.log('Movie deleted!');
    })
    .catch(err => {
      console.error(err);
    });
}
