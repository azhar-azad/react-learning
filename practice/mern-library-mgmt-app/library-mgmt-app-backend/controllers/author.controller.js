const Author = require('../models/author.model');

const createAuthor = (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const authAddress = req.body.authAddress;
  const email = req.body.email;

  const newAuthor = new Author({
    firstName,
    lastName,
    authAddress,
    email
  });

  newAuthor.save()
    .then(() => res.json('Author added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getAuthors = (req, res) => {
  Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getAuthor = (req, res) => {
  Author.findById(req.params.id)
    .then(author => res.json(author))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const deleteAuthor = (req, res) => {
  Author.findByIdAndDelete(req.params.id)
    .then(() => res.json('Author deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const updateAuthor = (req, res) => {
  let updatedAuthor = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    authAddress: req.body.authAddress,
    email: req.body.email
  };

  Author.findByIdAndUpdate(req.params.id, updatedAuthor, { new: true })
    .then(author => res.json(author))
    .catch(err => res.status(400).json(`Error: ${err}`));

  // Author.findById(req.params.id)
  //   .then(author => {
  //     author.firstName = req.body.firstName;
  //     author.lastName = req.body.lastName;
  //     author.authAddress = req.body.authAddress;
  //     author.email = req.body.email;
  //
  //     author.save()
  //       .then(() => res.json('Author updated!'))
  //       .catch(err => res.status(400).json(`Error: ${err}`));
  //   })
  //   .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createAuthor,
  getAuthors,
  getAuthor,
  deleteAuthor,
  updateAuthor
};