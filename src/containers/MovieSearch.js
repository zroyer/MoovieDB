import React, { Component } from 'react'
import Movie from '../components/Movie'
import Header from '../components/Header'
import { postMovie, deleteMovie, getQueriedMovies } from '../helpers'
import { Input } from 'antd'
const Search = Input.Search

class MovieSearch extends Component {
  state = {
    query: '',
    movies: []
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    }, () => {
      if (this.state.query.length > 0) {
        getQueriedMovies(this.state.query).then(res => {
            this.setState({ movies: res.data })
          })
          .catch(error => {
            console.log(error)
          })
      } else if (this.state.query.length === 0) {
        this.setState({query: '', movies: []})
      }
    })
  }

  handleAdd = (movie) => {
    postMovie({
      title: movie.title,
      actors: movie.actors,
      genre: movie.genre,
      rating: movie.rating,
      year: movie.year,
    }).then(res => {
        this.setState({ movies: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    deleteMovie(id).then(res => {
        this.setState({ movies: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <React.Fragment>
        <Header handleAdd={this.handleAdd}/>
        <div className='movie-container'>
          <div className='search-container'>
            <Search
              className='search-input'
              placeholder='Search for a movie...'
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              style={{ width: 400 }}
              size="large"
            />
          </div>
          {(this.state.query.length === 0) ? (
            <div className='prompt'>
              <div>
                <span role='img' className='point' aria-label='point'>☝️</span>
                &nbsp;&nbsp;Start searching!
              </div>
            </div>
          ) : (this.state.movies.length === 0) ? (
            <div className='prompt'>
              <div>
                <span role='img' className='point' aria-label='point'>🙅‍</span>
                &nbsp;&nbsp;No results!
              </div>
            </div>
          ) : (
            <div className='movie-grid'>
              {this.state.movies.map((movie) => (
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
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default MovieSearch;
