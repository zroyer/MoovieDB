import React, { Component } from 'react'
import axios from 'axios'
import { Table, Icon } from 'antd'

const API_URL = 'http://localhost:1738/api/movies'
const emptyData = `No movies to display... Hit that blue button up there to get started! 🤜🔵`

class MovieTable extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getMovies()
  }

  componentDidUpdate() {
    this.getMovies()
  }

  getMovies = () => {
    axios.get(API_URL)
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
    const { data } = this.state
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
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
          dataSource={data}
          pagination={false}
          rowKey='_id'
          locale={{emptyText: emptyData}} />
      </div>
    )
  }
}

export default MovieTable;
