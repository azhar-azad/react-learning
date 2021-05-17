/**
 * @Description: Routes for user entity
 * @Route: /users
 * */
const router = require('express').Router();
let User = require('../models/user.model');

/**
 * @Description: Get all user entities
 * @Endpoint: GET /
 * */
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

/**
 * @Description: Create an user entity
 * @Endpoint: POST /add
 * */
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// TODO: Create endpoints for GET /:id, DELETE /:id, POST /update/:id

module.exports = router;