require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const publishersRouter = require('./routes/publishers.router');
const authorsRouter = require('./routes/authors.router');
const booksRouter = require('./routes/books.router');
const usersRouter = require('./routes/user.router');

const db_uri = process.env.LOCAL_MONGODB_URI;
mongoose.connect(db_uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully!');
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/publishers', publishersRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});