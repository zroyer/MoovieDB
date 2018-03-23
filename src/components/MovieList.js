import React, { Component } from 'react'
import Movie from './Movie'
import axios from 'axios'

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  getMovies = () => {
    axios.get('http://localhost:1738/api/movies')
    .then(res => {
      this.setState({ data: res.data });
    })
    console.log(this.state)
  }

  componentDidMount() {
    this.getMovies()
    setInterval(this.getMovies, 2000);
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.data.map((movie, idx) => (
          <div>{movie.title}</div>
        ))}
      </div>
    )
  }
}

export default MovieList;
