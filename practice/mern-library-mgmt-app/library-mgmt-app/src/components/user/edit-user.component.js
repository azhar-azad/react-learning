import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class EditUser extends Component {

  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/users/${this.props.match.params.id}`)
      .then(response => {
        console.log(JSON.stringify(response.data));
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          username: response.data.username,
          password: response.data.password
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

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };

    console.log(JSON.stringify(user));

    axios.put(`http://localhost:5000/users/${this.props.match.params.id}/type`, user)
      .then(res => console.log(res.data));

    window.location = '/admin/home/';
  }

  render() {
    return (
      <div>
        <Link to="/admin/home">Back to List</Link>
        <br/>

        <h3>Change User Type</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
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
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              required
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit User"
              className="btn btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;