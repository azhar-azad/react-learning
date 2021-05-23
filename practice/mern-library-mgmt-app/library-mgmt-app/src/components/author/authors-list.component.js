import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Author = props => (
  <tr>
    <td>{props.author.firstName}</td>
    <td>{props.author.lastName}</td>
    <td>{props.author.email}</td>
    <td>{props.author.authAddress}</td>
    <td>
      <span className="action-link">
        <Link to={`/authors/edit/${props.author._id}`}>Edit</Link>
      </span>
      <span className="action-link">
        <a href="#"
           onClick={() => {props.deleteAuthor(props.author._id)}}>
          Delete
        </a>
      </span>
    </td>
  </tr>
);

class AuthorsList extends Component {

  constructor(props) {
    super(props);

    this.deleteAuthor = this.deleteAuthor.bind(this);

    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/authors/`)
      .then(response => {
        console.log(response.data);
        this.setState({
          authors: response.data
        });
      })
      .catch(error => console.log(error));
  }

  deleteAuthor(id) {
    axios.delete(`http://localhost:5000/authors/${id}`)
      .then(res => console.log(res.data));

    this.setState({
      authors: this.state.authors.filter(author => author._id !== id)
    });
  }

  showAuthorList() {
    return this.state.authors.map(currentAuthor => {
      return <Author author={currentAuthor}
                     deleteAuthor={this.deleteAuthor}
                     key={currentAuthor._id} />
    });
  }

  render() {
    return (
      <div>
        <h3>All Registered Authors</h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.showAuthorList() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default AuthorsList;