import React, { Component } from 'react'
import Movie from '../components/Movie'
import axios from 'axios'
import { Input } from 'antd'

const Search = Input.Search
const API_URL = 'http://localhost:1738/api/movies'

class MovieSearch extends Component {
  state = {
    query: '',
    data: []
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    }, () => {
      if (this.state.query.length > 0) {
        this.getQueriedMovies()
      } else if (this.state.query.length === 0) {
        this.setState({query: '', data: []})
      }
    })
  }

  getQueriedMovies = () => {
    axios.get(`http://localhost:1738/api/movies?q=${this.state.query}`)
    .then(res => {
      this.setState({ data: res.data });
    })
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    this.deleteMovie(id)
  }

  deleteMovie = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(res => {
        console.log('Movie deleted!');
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='movie-container'>
        <div className='search-container'>
          <Search
            className='search-input'
            placeholder='Search for a movie...'
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            style={{ width: 320 }}
          />
        </div>
        <div className='movie-grid'>
          {this.state.data && this.state.data.map((movie) => (
            <Movie
              title={movie.title}
              actors={movie.actors}
              genre={movie.genre}
              rating={movie.rating}
              year={movie.year}
              id={movie._id}
              key={movie._id}
              handleDelete={this.handleDelete}/>
          ))}
        </div>
      </div>
    )
  }
}

export default MovieSearch;
