const Book = require('../models/book.model');

const createBook = (req, res) => {
  const bookName = req.body.bookName;
  const added = req.body.added;
  const pageCount = req.body.pageCount;
  const totalCopies = req.body.totalCopies;
  const authorName = req.body.authorName;
  const publisherName = req.body.publisherName;

  const newBook = new Book({
    bookName,
    added,
    pageCount,
    totalCopies,
    authorName,
    publisherName
  });

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getBooks = (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getBook = (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const updateBook = (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.bookName = req.body.bookName;
      book.added = req.body.added;
      book.pageCount = req.body.pageCount;
      book.totalCopies = req.body.totalCopies;
      book.authorName = req.body.authorName;
      book.publisherName = req.body.publisherName;

      book.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook
};