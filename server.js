'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Movie = require('./model/movies');
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

router.route('/movies')
  .get(function(req, res) {
    const param = req.query.q;
    console.log(param)
    if (req.query.q) {
      Movie.find(
        { $or:[
          { "title": { "$regex": req.query.q, "$options": "i" } },
          { "actors": { "$regex": req.query.q, "$options": "i" } },
          { "genre": { "$regex": req.query.q, "$options": "i" } },
          { "rating": { "$regex": req.query.q, "$options": "i" } },
        ]},
        function(err, movies) {
          if (err)
          res.send(err);
          res.json(movies)
        });
    } else {
      Movie.find(function(err, movies) {
          if (err)
          res.send(err);
          res.json(movies)
        });
    }
  })
  .post(function(req, res) {
    let movie = new Movie();
    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.actors = req.body.actors;
    movie.genre = req.body.genre;
    movie.rating = req.body.rating;

    movie.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Movie posted 📼' });
    });
  });

router.route('/movies/:movie_id')
 .delete(function(req, res) {
   Movie.remove({ _id: req.params.movie_id }, function(err, movie) {
     if (err)
       res.send(err);
     res.json({ message: 'Movie deleted 👋' })
   })
 });

app.use('/api', router);

app.listen(port, function() {
  console.log(`🏃‍♂️  on port ${port}`);
});
