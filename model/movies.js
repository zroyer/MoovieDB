'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  title: String,
  year: Number,
  actors: String,
  genre: String,
  rating: String
});

module.exports = mongoose.model('Movie', MoviesSchema);
