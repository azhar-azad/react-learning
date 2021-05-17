const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
    trim: true
  },
  added: {
    type: Date,
    required: true
  },
  pageCount: {
    type: Number,
    trim: true
  },
  totalCopies: {
    type: Number,
    trim: true,
    required: true
  },
  authorName: {
    type: String,
    required: true,
    trim: true
  },
  publisherName: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;