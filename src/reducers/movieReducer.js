import {FETCH_MOVIES, RECEIVE_MOVIES} from '../actions/actionTypes';
import assign from 'immutable-assign'
const API_URL = 'http://localhost:1738/api/movies'
export const initialState = {
  movies: []
}

export default function movies(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case RECEIVE_MOVIES:
      return assign(state, (s) => s.movies, () => action.data)
    default:
      return state;
  }
}

const asyncFetch = () => {
  return new Promise( function(resolve, reject) {
    let test = fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    if(test) {
      resolve(test)
    } else {
      reject()
    }
  })
}
