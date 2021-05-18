/**
 * @Description: Routes for User entity
 * @Route: /users
 * */
const router = require('express').Router();

const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  loginUser
} = require('../controllers/user.controller');

/**
 * @Description: Get all User entities
 * @Endpoint: GET /
 * */
router.get('/', getUsers);

/**
 * @Description: Create a User entity
 * @Endpoint: POST /register
 * */
router.post('/register', createUser);

/**
 * @Description: Get a single User entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getUser);

/**
 * @Description: Delete a single User entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteUser);

/**
 * @Description: Update a single User entity by id
 * @Endpoint: POST /update/id
 * */
router.post('/update/:id',updateUser);

/**
 * @Description: Login an User entity by username and password
 * @Endpoint: POST /login
 * */
router.post('/login', loginUser)

module.exports = router;