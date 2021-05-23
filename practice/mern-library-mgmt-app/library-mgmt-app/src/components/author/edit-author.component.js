import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditAuthor extends Component {

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

  componentDidMount() {
    axios.get(`http://localhost:5000/authors/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          authAddress: response.data.authAddress,
          email: response.data.email
        });
      })
      .catch(error => console.log(error));
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

    const author = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      authAddress: this.state.authAddress,
      email: this.state.email
    };

    console.log(JSON.stringify(author));

    axios.put(`http://localhost:5000/authors/${this.props.match.params.id}`, author)
      .then(res => console.log(res.data));

    window.location = '/authors';
  }

  render() {
    return (
      <div>
        <Link to="/authors">Back to All Authors</Link>
        <h3>Edit Author</h3>
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
              value="Edit Author"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditAuthor;