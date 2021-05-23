import React, { Component } from "react";
import { Link } from "react-router-dom";

class SmartLink extends Component {
  render() {
    return (
        this.props.show ? <Link className={this.props.className} to={this.props.to}>{this.props.body}</Link> : null
    );
  }
}

export default SmartLink;