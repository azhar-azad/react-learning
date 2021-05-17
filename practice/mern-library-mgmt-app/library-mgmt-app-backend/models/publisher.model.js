const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
  pubName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  pubAddress: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;