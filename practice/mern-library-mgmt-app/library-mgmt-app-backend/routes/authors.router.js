/**
 * @Description: Routes for Author entity
 * @Route: /authors
 * */
const router = require('express').Router();

const {
  createAuthor,
  getAuthors,
  getAuthor,
  deleteAuthor,
  updateAuthor
} = require('../controllers/author.controller');

/**
 * @Description: Get all Author entities
 * @Endpoint: GET /
 * */
router.get('/', getAuthors);

/**
 * @Description: Create a Author entity
 * @Endpoint: POST /add
 * */
router.post('/add', createAuthor);

/**
 * @Description: Get a single Author entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getAuthor);

/**
 * @Description: Delete a single Author entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteAuthor);

/**
 * @Description: Update a single Author entity by id
 * @Endpoint: POST /update/id
 * */
router.put('/:id',updateAuthor);

module.exports = router;