'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 1738;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
  res.json({ message: 'bueno 👌'});
});

app.use('/api', router);

app.listen(port, function() {
  console.log(`🏃‍♂️  on port ${port}`);
});
