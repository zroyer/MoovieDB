'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.API_PORT || 1738;

mongoose.connect('mongodb://user:password@ds035137.mlab.com:35137/mooviedb');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST,PUT,GET,HEAD,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'bueno 👌'});
});

app.use('/api', router);

app.listen(port, function() {
  console.log(`🏃‍♂️  on port ${port}`);
});
