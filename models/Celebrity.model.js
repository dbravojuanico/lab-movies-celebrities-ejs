const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebShchema = new Schema({
  name:{
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  catchPhrase: {
    type: String,
    required: true
  }
});

const Celeb = mongoose.model('Celeb', celebShchema);

module.exports = Celeb;
