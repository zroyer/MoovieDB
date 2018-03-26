import * as types from './actionTypes';
import thunkMiddleware from 'redux-thunk';
import {RECEIVE_MOVIES} from './actionTypes'

const API_URL = 'http://localhost:1738/api/movies'

export function receiveMovies(json) {
  return {type: RECEIVE_MOVIES, movies: json.data};
}

export function fetchMovies() {
  return function (dispatch) {
    return fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveMovies(json)))
  }
}
