import React, { Component } from 'react'
import { Table, Icon } from 'antd'
import { deleteMovie, getMovies } from '../helpers'

const emptyData = `No movies to display... Hit that blue button up there to get started! 🤜🔵`

class MovieTable extends Component {

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

  componentDidUpdate(prevProps, prevState) {
    getMovies().then(res => {
        this.setState({ movies: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    deleteMovie(id)
  }

  render() {
    console.log('render')
    const { movies } = this.state
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => { return a.title.localeCompare(b.title)},
    }, {
      title: 'Actors',
      dataIndex: 'actors',
      key: 'actors',
    }, {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    }, {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    }, {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    }, {
      title: 'Delete?',
      dataIndex: '_id',
      key: '_id',
      render: (key) => (
       <span>
         <a onClick={(e) => this.handleDelete(e, key)}><Icon type="delete" /></a>
       </span>
     ),
    }];

    return (
      <div className="movie-container">
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
