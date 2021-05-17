const Publisher = require('../models/publisher.model');

const createPublisher = (req, res) => {
  const pubName = req.body.pubName;
  const pubAddress = req.body.pubAddress;

  const newPublisher = new Publisher({
    pubName,
    pubAddress
  });

  newPublisher.save()
    .then(() => res.json('Publisher added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getPublishers = (req, res) => {
  Publisher.find()
    .then(publishers => res.json(publishers))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getPublisher = (req, res) => {
  const publisher = Publisher.findById(req.params.id)
    .then(publisher => res.json(publisher))
    .catch(err => res.status(400).json(`Error: ${err}`));

  return publisher;
};

const deletePublisher = (req, res) => {
  Publisher.findByIdAndDelete(req.params.id)
    .then(() => res.json('Publisher deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const updatePublisher = (req, res) => {
  Publisher.findById(req.params.id)
    .then(publisher => {
      publisher.pubName = req.body.pubName;
      publisher.pubAddress = req.body.pubAddress;

      publisher.save()
        .then(() => res.json('Publisher updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createPublisher,
  getPublishers,
  getPublisher,
  deletePublisher,
  updatePublisher
};