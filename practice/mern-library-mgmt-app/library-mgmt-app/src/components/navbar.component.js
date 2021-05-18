import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand" to="/">Library Books Tracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link className="nav-link" to="/">All Books</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/create">Create New Book</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/authors/create">Create New Author</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/publishers/create">Create New Publisher</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/admin/login">Admin</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;