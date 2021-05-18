const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;