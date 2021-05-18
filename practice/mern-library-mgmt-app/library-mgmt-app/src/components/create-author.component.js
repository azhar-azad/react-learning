import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateAuthor extends Component {

  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAuthAddress = this.onChangeAuthAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      authAddress: '',
      email: ''
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeAuthAddress(e) {
    this.setState({
      authAddress: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newAuthor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      authAddress: this.state.authAddress,
      email: this.state.email
    };

    console.log(JSON.stringify(newAuthor));

    axios.post(`http://localhost:5000/authors/add`, newAuthor)
      .then(res => {
        console.log(JSON.stringify(res.data));
        alert(`Author created with name: ${newAuthor.firstName} ${newAuthor.lastName}`);
      });

    this.setState({
      firstName: '',
      lastName: '',
      authAddress: '',
      email: ''
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Back to List</Link>
        <h3>Create New Author</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              required
            />
          </div>
          <div className="form-group">
            <label>Author Address: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.authAddress}
              onChange={this.onChangeAuthAddress}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create Author"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAuthor;