import React, { Component } from "react";
import axios from "axios";

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: ''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/users/profile/${this.props.match.params.id}`)
      .then(response => {
        console.log(JSON.stringify(response.data));
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          username: response.data.username
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        UserProfile Component

        <h3>Profile</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{this.state.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{this.state.lastName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{this.state.username}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserProfile;