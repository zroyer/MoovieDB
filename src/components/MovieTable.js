import React, { Component } from 'react'
import Movie from './Movie'
import axios from 'axios'
import { Table, Divider, Icon } from 'antd'

const API_URL = 'http://localhost:1738/api/movies'

class MovieTable extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getMovies()
    setInterval(this.getMovies, 1000)
  }

  getMovies = () => {
    axios.get(API_URL)
    .then(res => {
      this.setState({ data: res.data });
    })
    console.log(this.state)
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
         <a href="#" onClick={(e) => this.handleDelete(e, key)}><Icon type="delete" /></a>
       </span>
     ),
    }];

    return (
      <div className="movie-container">
        <Table columns={columns} dataSource={this.state.data} pagination={false} rowKey='_id'/>
      </div>
    )
  }
}

export default MovieTable;
