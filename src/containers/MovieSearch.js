import React, { Component } from 'react'
import MovieList from '../components/MovieList'
import MovieForm from '../components/MovieForm'

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <h2>Movies Search:</h2>
      </div>
    )
  }
}

export default MovieContainer;
