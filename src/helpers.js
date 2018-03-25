import axios from 'axios'
const API_URL = 'http://localhost:1738/api/movies'

export const getMovies = () => {
  return axios.get(API_URL)
}

export const getQueriedMovies = (query) => {
  return axios.get(`${API_URL}?q=${query}`)
}

export const postMovie = (movie) => {
  return axios.post(API_URL, movie)
  .then((response) => {
    return axios.get(API_URL)
  })
}

export const deleteMovie = (id) => {
  return axios.delete(`${API_URL}/${id}`)
  .then((response) => {
    return axios.get(API_URL)
  })
}
