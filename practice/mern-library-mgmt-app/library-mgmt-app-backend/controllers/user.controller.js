const User = require('../models/user.model');

const createUser = (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const type = req.body.type;

  const newUser = new User({
    firstName,
    lastName,
    email,
    username,
    password,
    type
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getUsers = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const updateUser = (req, res) => {
  let updatedUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };

  User.findByIdAndUpdate(req.params.id, updatedUser, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const updateUserType = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { type: req.body.type }, { new: true })
    .then((user) => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const loginUser = (req, res) => {
  User.find({ username: req.body.username }).exec()
    .then(user => {
      if (user[0].password === req.body.password) {
        res.json(user[0]);
      }
      else {
        throw new Error(`Password does not match`);
      }
    })
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const getUserByUsername = (req, res) => {
  User.find({ username: req.params.id }).exec()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  updateUserType,
  loginUser,
  getUserByUsername
};