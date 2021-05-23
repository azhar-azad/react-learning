import React, { Component } from "react";
import { authServices } from '../services/authentication.service';

class Logout extends Component {

  componentDidMount() {
    authServices.logout();
  }

  render() {
    return (
      <div>
        You are logged out!! Please, refresh the page and login again.
      </div>
    );
  }
}

export default Logout;