import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const User = props => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>{props.user.email}</td>
    <td>{props.user.type}</td>
    <td>
      <span className="action-link">
        <Link to={`/admin/users/edit/${props.user._id}`}>Edit</Link>
      </span>
      <span className="action-link">
        <a href="#"
           onClick={() => { props.deleteUser(props.user._id) }}>
          Delete
        </a>
      </span>
    </td>
  </tr>
);

class AdminHome extends Component {

  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/users/`)
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => console.log(error));
  }

  deleteUser(id) {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(res => console.log(res.data));

    this.setState({
      users: this.state.users.filter(user => user._id !== id)
    });
  }

  showUserList() {
    return this.state.users.map(currentUser => {
      return <User
        user={currentUser}
        deleteUser={this.deleteUser}
        key={currentUser._id} />
    });
  }

  render() {
    return(
      <div>
        <del>AdminHome Component</del>

        <h3>All Users</h3>

        <table className="table">
          <thead className="thead-light">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          { this.showUserList() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminHome;