const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieShchema = new Schema({
  title:{
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  cast: {
    type: [String],
    required: true
  }
});

const Movie = mongoose.model('Movie', movieShchema);

module.exports = Movie;
