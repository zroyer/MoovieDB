import React, { Component } from 'react';
import {
  Modal,
  Button,
  Switch,
  Form,
  Input,
  Icon,
  InputNumber,
  Select
} from 'antd';
import './Movie.css';
import axios from 'axios'

const FormItem = Form.Item;
const Option = Select.Option;

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      actors: '',
      genre: '',
      rating: '',
      year: 2018,
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleYearChange = (value) => {
    this.setState({ year: value });
  }

  handleActorsChange = (e) => {
    this.setState({ actors: e.target.value });
  }

  handleGenreChange = (value) => {
    this.setState({ genre: value });
  }

  handleRatingChange = (value) => {
    this.setState({ rating: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)

    this.postMovie({
      title: this.state.title,
      actors: this.state.actors,
      genre: this.state.genre,
      rating: this.state.rating,
      year: this.state.year,
    })

    this.setState({
      title: '',
      year: 2018,
      actors: '',
      genre: '',
      rating: '',
      visible: false
    });
  }

  postMovie = (movie) => {
    axios.post('http://localhost:1738/api/movies', movie)
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <Button type="primary" className='add' onClick={this.showModal}>Add Movie<Icon type="plus" /></Button>
        <Modal
          title="Add Movie"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <Form
            onSubmit={ this.handleSubmit }
            layout='vertical'>
            <FormItem label='Title'>
              <Input
                type='text'
                value={ this.state.title }
                onChange={ this.handleTitleChange } />
            </FormItem>
            <FormItem label='Actors'>
              <Input
                type='text'
                value={ this.state.actors }
                onChange={ this.handleActorsChange } />
            </FormItem>
            <FormItem label='Genre'>
              <Select placeholder='Please select...' style={{ width: 220 }} onChange={this.handleGenreChange}>
                <Option value="Action">Action</Option>
                <Option value="Comedy">Comedy</Option>
                <Option value="Thriller">Thriller</Option>
                <Option value="Horror">Horror</Option>
                <Option value="Western">Western</Option>
                <Option value="Science Fiction">Science Fiction</Option>
                <Option value="Mystery">Mystery</Option>
              </Select>
            </FormItem>
            <FormItem label='Rating'>
              <Select placeholder='Please select...' style={{ width: 220 }} onChange={this.handleRatingChange}>
                <Option value="G">G</Option>
                <Option value="PG">PG</Option>
                <Option value="PG-13">PG-13</Option>
                <Option value="R">R</Option>
              </Select>
            </FormItem>
            <FormItem label='Year'>
              <InputNumber
                min={1900}
                max={2018}
                defaultValie={this.state.year}
                value={ this.state.year }
                onChange={ this.handleYearChange } />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default MovieForm;
