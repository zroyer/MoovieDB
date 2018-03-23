import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    let movieSlot = this.props.data && this.props.data.map(movie => {
      return (
        <Movie title={ movie.title } />
      )
    })
    return (
      <div>
        <div>Movie List</div>
        { movieSlot }
      </div>
    )
  }
}

export default MovieList;
