import React, { Component } from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  Icon,
  InputNumber,
  Select
} from 'antd';
import './Movie.css';
import { postMovie } from '../helpers'

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

    postMovie({
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
              <Select placeholder='Please select...' style={{ width: 220 }} value={ this.state.genre } onChange={this.handleGenreChange}>
                <Option value="Action">Action</Option>
                <Option value="Comedy">Comedy</Option>
                <Option value="Drama">Drama</Option>
                <Option value="Horror">Horror</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Science Fiction">Sci-Fi</Option>
                <Option value="Thriller">Thriller</Option>
              </Select>
            </FormItem>
            <FormItem label='Rating'>
              <Select placeholder='Please select...' style={{ width: 220 }} value={ this.state.rating } onChange={this.handleRatingChange}>
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
