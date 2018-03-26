import React, { Component } from 'react'
import { Card, Icon } from 'antd'

class Movie extends Component {

  render() {
    let { title, actors, genre, rating, year, id } = this.props

    return (
      <Card
        title={`${title} (${year})`}
        style={{ width: 320, margin: '1rem' }}
        extra={
          <span>
            <a onClick={(e) => this.props.handleDelete(e, id)}><Icon type='delete' /></a>
          </span>
        }>
        <p><label>Rating: </label>{rating}</p>
        <p><label>Genre: </label>{genre}</p>
        <p><label>Actors: </label>{actors}</p>
      </Card>
    )
  }
}

export default Movie;
