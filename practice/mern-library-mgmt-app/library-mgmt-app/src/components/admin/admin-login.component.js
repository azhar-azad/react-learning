import React, { Component } from "react";
import axios from "axios";

class AdminLogin extends Component {

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
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

    const loginAttempt = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(JSON.stringify(loginAttempt));

    axios.post(`http://localhost:5000/users/login`, loginAttempt)
      .then(res => {
        console.log(JSON.stringify(res.data));
        if (res.data.type === 'ADMIN') {
          window.location = '/admin/home';
        }
        else {
          window.location = '/admin/error';
        }
      }).catch(err => {
        window.location = '/admin/error';
    })

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
        <h3>Login to Admin Panel</h3>

        <form onSubmit={this.onSubmit}>
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
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Login"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AdminLogin;