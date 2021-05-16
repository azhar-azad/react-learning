/**
 * @Description: Routes for exercise entity
 * @Route: /exercises
 * */
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

/**
 * @Description: Get al exercise entities
 * @Endpoint: GET /
 * */
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

/**
 * @Description: Create a exercise entity
 * @Endpoint: POST /add
 * */
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

/**
 * @Description: Get a single exercise entity by id
 * @Endpoint: GET /id
 * */
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

/**
 * @Description: Delete a single exercise entity by id
 * @Endpoint: DELETE /id
 * */
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

/**
 * @Description: Update a single exercise entity by id
 * @Endpoint: POST /update/id
 * */
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration;
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

/*
 *
POST REQ SAMPLE
{
    "username": "azad",
    "description": "bike ride",
    "duration": 20,
    "date": "2021-05-17T21:30:15.187z"
}
 * */