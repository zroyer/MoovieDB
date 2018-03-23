import React, { Component } from 'react'
import Movie from '../components/Movie'
import { Input } from 'antd'
import axios from 'axios'

class MovieSearch extends Component {
  state = {
    query: '',
    data: []
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query.length > 0) {
        console.log(this.state.query)
        this.getQueriedMovies()
      }
    })
  }

  getQueriedMovies = () => {
    axios.get(`http://localhost:1738/api/movies?q=${this.state.query}`)
    .then(res => {
      this.setState({ data: res.data });
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </div>
    )
  }
}

export default MovieSearch;
