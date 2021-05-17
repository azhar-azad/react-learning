/**
 * @Description: Routes for Publisher entity
 * @Route: /publishers
 * */
const router = require('express').Router();

const {
  createPublisher,
  getPublishers,
  getPublisher,
  deletePublisher,
  updatePublisher
} = require('../controllers/publisher.controller');

/**
 * @Description: Get all Publisher entities
 * @Endpoint: GET /
 * */
router.get('/', getPublishers);

/**
 * @Description: Create a Publisher entity
 * @Endpoint: POST /add
 * */
router.post('/add', createPublisher);

/**
 * @Description: Get a single Publisher entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getPublisher);

/**
 * @Description: Delete a single Publisher entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deletePublisher);

/**
 * @Description: Update a single Publisher entity by id
 * @Endpoint: POST /update/id
 * */
router.post('/update/:id',updatePublisher);

module.exports = router;