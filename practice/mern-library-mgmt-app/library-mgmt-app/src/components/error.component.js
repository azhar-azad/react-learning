import React, { Component } from "react";
import {authServices} from "../services/authentication.service";
import {Link} from "react-router-dom";

class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
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
  }

  render() {
    return(
      <div>
        {
          this.state.isLoggedIn ? (
            <div>
              <h4>Some error happened!! Probable causes: </h4>
              <ol>
                <li>The site does not have this functionality.</li>
                <li>You're trying to access a page that you don't have accessibility.</li>
              </ol>
            </div>
          ) : (
            <h4>
              You are not registered. Please register <Link to="/users/create">here</Link>
            </h4>
          )
        }
      </div>
    );
  }
}

export default Error;