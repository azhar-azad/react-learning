import React, { Component } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class AdminEditUser extends Component {

  constructor(props) {
    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: '',
      types: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/users/${this.props.match.params.id}`)
      .then(response => {
        console.log(JSON.stringify(response.data));
        this.setState({
          type: response.data.type
        });
      })
      .catch(error => console.log(error));
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      type: this.state.type
    };

    console.log(JSON.stringify(user));

    axios.put(`http://localhost:5000/users/update/${this.props.match.params.id}/type`, user)
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
            <label>Type: </label>
            <select ref="userInput"
                    value={this.state.type}
                    onChange={this.onChangeType}
                    className="form-control"
                    required>
              <option key="USER" value="USER">USER</option>
              <option key="ADMIN" value="ADMIN">ADMIN</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Change Type"
              className="btn btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminEditUser;