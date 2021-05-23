import React, { Component } from "react";
import { Link } from "react-router-dom";
import { authServices } from '../../services/authentication.service';
import SmartLink from "../smart-link.component";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isAdmin: false
    }
  }

  componentDidMount() {
    if (authServices.isLoggedIn()) {
      this.setState({
        isLoggedIn: true
      });
    }
    else {
      this.setState({
        isLoggedIn: false
      });
    }

    if (authServices.isAdmin()) {
      this.setState({
        isAdmin: true
      });
    }
    else {
      this.setState({
        isAdmin: false
      });
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand" to="/">Library Books Tracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <SmartLink className="nav-link" to="/books" body="All Books" show={this.state.isLoggedIn} />
            </li>
            <li className="navbar-item">
              <SmartLink className="nav-link" to="/books/create" body="Create New Book" show={this.state.isLoggedIn}/>
            </li>
            <li className="navbar-item">
              <SmartLink className="nav-link" to="/authors/create" body="Create New Author" show={this.state.isLoggedIn}/>
            </li>
            <li className="navbar-item">
              <SmartLink className="nav-link" to="/publishers/create" body="Create New Publisher" show={this.state.isLoggedIn}/>
            </li>

            <li className="navbar-item">
              <SmartLink className="nav-link" to="/login" body="Login" show={!this.state.isLoggedIn} />
            </li>
            <li className="navbar-item">
              <SmartLink className="nav-link" to="/admin/home" body="Admin" show={this.state.isLoggedIn && this.state.isAdmin} />
            </li>
            <li className="navbar-item">
              <SmartLink className="nav-link" to="/logout" body="Logout" show={this.state.isLoggedIn} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;