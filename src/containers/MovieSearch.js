import React, { Component } from 'react'
import Movie from '../components/Movie'
import { deleteMovie, getQueriedMovies } from '../helpers'
import { Input } from 'antd'
const Search = Input.Search

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
        getQueriedMovies(this.state.query).then(res => {
            this.setState({ data: res.data })
          })
          .catch(error => {
            console.log(error)
          });
      } else if (this.state.query.length === 0) {
        this.setState({query: '', data: []})
      }
    })
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    deleteMovie(id)
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
