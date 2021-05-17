const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  authAddress: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;