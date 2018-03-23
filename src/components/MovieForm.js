import React, { Component } from 'react';

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      year: '',
      actors: '',
      genre: '',
      rating: ''
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }
  handleYearChange = (e) => {
    this.setState({ year: e.target.value });
  }
  handleActorsChange = (e) => {
    this.setState({ actors: e.target.value });
  }
  handleGenreChange = (e) => {
    this.setState({ genre: e.target.value });
  }
  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Title'
          value={ this.state.title }
          onChange={ this.handleTitleChange } />
        <input
          type='text'
          placeholder='Year'
          value={ this.state.year }
          onChange={ this.handleYearChange } />
        <input
          type='text'
          placeholder='Actors'
          value={ this.state.actors }
          onChange={ this.handleActorsChange } />
        <input
          type='text'
          placeholder='Genre'
          value={ this.state.genre }
          onChange={ this.handleGenreChange } />
        <input
          type='text'
          placeholder='Rating'
          value={ this.state.rating }
          onChange={ this.handleRatingChange } />
        <input
          type='submit'
          value='Post' />
      </form>
    )
  }
}

export default MovieForm;
