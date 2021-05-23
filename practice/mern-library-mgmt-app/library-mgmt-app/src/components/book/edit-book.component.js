import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";
import axios from "axios";

class EditBook extends Component {

  constructor(props) {
    super(props);

    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
    this.onChangePublisherName = this.onChangePublisherName.bind(this);
    this.onChangePageCount = this.onChangePageCount.bind(this);
    this.onChangeTotalCopies = this.onChangeTotalCopies.bind(this);
    this.onChangeAdded = this.onChangeAdded.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bookName: '',
      authorName: '',
      publisherName: '',
      pageCount: 0,
      totalCopies: 0,
      added: new Date(),
      authorNames: [],
      publisherNames: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/books/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          bookName: response.data.bookName,
          authorName: response.data.authorName,
          publisherName: response.data.publisherName,
          pageCount: response.data.pageCount,
          totalCopies: response.data.totalCopies,
          added: new Date(response.data.added)
        });
      })
      .catch(error => console.log(error));

    axios.get(`http://localhost:5000/authors/`)
      .then(response => {
        this.setState({
          authorNames: response.data.map(author =>
            author.firstName + ' ' + author.lastName)
        });
      })
      .catch(error => console.log(error));

    axios.get(`http://localhost:5000/publishers/`)
      .then(response => {
        this.setState({
          publisherNames: response.data.map(publisher =>
            publisher.pubName)
        });
      })
      .catch(error => console.log(error));
  }

  onChangeBookName(e) {
    this.setState({
      bookName: e.target.value
    });
  }

  onChangeAuthorName(e) {
    this.setState({
      authorName: e.target.value
    });
  }

  onChangePublisherName(e) {
    this.setState({
      publisherName: e.target.value
    });
  }

  onChangePageCount(e) {
    this.setState({
      pageCount: e.target.value
    });
  }

  onChangeTotalCopies(e) {
    this.setState({
      totalCopies: e.target.value
    });
  }

  onChangeAdded(date) {
    this.setState({
      added: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      bookName: this.state.bookName,
      authorName: this.state.authorName,
      publisherName: this.state.publisherName,
      pageCount: this.state.pageCount,
      totalCopies: this.state.totalCopies,
      added: this.state.added
    };

    console.log(JSON.stringify(book));

    axios.post(`http://localhost:5000/books/update/${this.props.match.params.id}`, book)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <Link to="/">Back to All Books</Link>
        <h3>Edit Book</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Book Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.bookName}
              onChange={this.onChangeBookName}
              required
            />
          </div>
          <div className="form-group">
            <label>Author: </label>
            <select
              ref="userInput"
              value={this.state.authorName}
              onChange={this.onChangeAuthorName}
              className="form-control"
              required>
              {
                this.state.authorNames.map(function (authorName) {
                  return <option key={authorName} value={authorName}>
                    {authorName}
                  </option>
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Publisher: </label>
            <select
              ref="userInput"
              value={this.state.publisherName}
              onChange={this.onChangePublisherName}
              className="form-control"
              required>
              {
                this.state.publisherNames.map(function (publisherName) {
                  return <option key={publisherName} value={publisherName}>
                    {publisherName}
                  </option>
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Page Count: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.pageCount}
              onChange={this.onChangePageCount}
            />
          </div>
          <div className="form-group">
            <label>Total Copies: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.totalCopies}
              onChange={this.onChangeTotalCopies}
              required
            />
          </div>
          <div className="form-group">
            <label>Added Date: </label>
            <DatePicker
              selected={this.state.added}
              onChange={this.onChangeAdded} />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Book"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditBook;