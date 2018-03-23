import React, { Component } from 'react';
import { Card } from 'antd';

class Movie extends Component {

  render() {
    let { title, actors, genre, rating, year } = this.props

    return (
      <Card title={`${title} (${year})`}
        style={{ width: 320, margin: '1rem' }}>
        <p><label>Actors: </label>{actors}</p>
        <p><label>Genre: </label>{genre}</p>
        <p><label>Rating: </label>{rating}</p>
      </Card>
    )
  }
}

export default Movie;
