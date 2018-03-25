import React, { Component } from 'react'
import { Table, Icon } from 'antd'
import { deleteMovie, getMovies, postMovie } from '../helpers'
import Header from '../components/Header'
import MovieTable from '../components/MovieTable'


class MovieContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { movies: [] }
    console.log(props)
  }

  componentDidMount() {
    getMovies().then(res => {
        this.setState({ movies: res.data })
      })
      .catch(error => {
        console.log(error)
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
    console.log('render')
    const { movies } = this.state

    return (
      <React.Fragment>
        <Header handleAdd={this.handleAdd}/>
        <MovieTable movies={movies} handleDelete={this.handleDelete}/>
      </React.Fragment>
    )
  }
}

export default MovieContainer;
