//Create Schema and model
const mongoose = require('mongoose');

const DevSchema = mongoose.Schema({
  address : {
    type : String,
    required: [true, 'Please enter address or location']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],

    },
    coordinates: {
      type: [Number],
      index : '2dsphere'
    }
  },
  createdAt : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Dev',DevSchema);
