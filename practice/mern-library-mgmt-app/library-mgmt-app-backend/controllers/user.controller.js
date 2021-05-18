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
  User.findById(req.params.id)
    .then(user => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;
      user.type = req.body.type;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
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

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  loginUser
};