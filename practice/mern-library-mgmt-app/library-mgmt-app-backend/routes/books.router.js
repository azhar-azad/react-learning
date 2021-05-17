/**
 * @Description: Routes for Book entity
 * @Route: /books
 * */
const router = require('express').Router();

const {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook
} = require('../controllers/book.controller');

/**
 * @Description: Get all Book entities
 * @Endpoint: GET /
 * */
router.get('/', getBooks);

/**
 * @Description: Create a Book entity
 * @Endpoint: POST /add
 * */
router.post('/add', createBook);

/**
 * @Description: Get a single Book entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getBook);

/**
 * @Description: Delete a single Book entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteBook);

/**
 * @Description: Update a single Book entity by id
 * @Endpoint: POST /update/id
 * */
router.post('/update/:id',updateBook);

module.exports = router;