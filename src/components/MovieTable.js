import React, { Component } from 'react'
import { Table, Icon } from 'antd'

const emptyData = `No movies to display... Hit that blue button up there to get started! 🤜🔵`

class MovieTable extends Component {

  constructor(props) {
    super(props)
    this.state = { movies: [] }
  }

  render() {
    const { movies } = this.props
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => { return b.title.localeCompare(a.title)},
    }, {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
    }, {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      sorter: (a, b) => { return b.rating.localeCompare(a.rating)},
    }, {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      sorter: (a, b) => { return b.genre.localeCompare(a.genre)},
    }, {
      title: 'Actors',
      dataIndex: 'actors',
      key: 'actors',
    }, {
      title: 'Delete?',
      dataIndex: '_id',
      key: '_id',
      render: (key) => (
       <span>
         <a onClick={(e) => this.props.handleDelete(e, key)}><Icon type='delete' /></a>
       </span>
     ),
    }]

    return (
      <div className='movie-container'>
        <Table
          columns={columns}
          dataSource={movies}
          pagination={false}
          rowKey='_id'
          locale={{emptyText: emptyData}} />
      </div>
    )
  }
}

export default MovieTable;
