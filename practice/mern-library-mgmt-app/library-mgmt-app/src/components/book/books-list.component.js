import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Book = props => (
  <tr>
    <td>{props.book.bookName}</td>
    <td>{props.book.authorName}</td>
    <td>{props.book.publisherName}</td>
    <td>{props.book.pageCount}</td>
    <td>{props.book.totalCopies}</td>
    <td>{props.book.added.substring(0, 10)}</td>
    <td>
      <span className="action-link">
        <Link to={`/books/edit/${props.book._id}`}>Edit</Link>
      </span>
      <span className="action-link">
        <a href="#"
           onClick={() => { props.deleteBook(props.book._id) }}>
          Delete
        </a>
      </span>
    </td>
  </tr>
);

class BooksList extends Component {

  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/books/`)
      .then(response => {
        this.setState({
          books: response.data
        });
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }

  deleteBook(id) {
    axios.delete(`http://localhost:5000/books/${id}`)
      .then(res => console.log(res.data));

    this.setState({
      books: this.state.books.filter(book => book._id !== id)
    });
  }

  showBookList() {
    return this.state.books.map(currentBook => {
      return <Book
                book={currentBook}
                deleteBook={this.deleteBook}
                key={currentBook._id} />
    });
  }

  render() {
    return (
      <div>
        <h3>All Library Books</h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Page Count</th>
              <th>Total Copies</th>
              <th>Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.showBookList() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default BooksList;