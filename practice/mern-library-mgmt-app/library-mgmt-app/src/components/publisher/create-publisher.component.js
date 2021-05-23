import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreatePublisher extends Component {

  constructor(props) {
    super(props);

    this.onChangePubName = this.onChangePubName.bind(this);
    this.onChangePubAddress = this.onChangePubAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pubName: '',
      pubAddress: ''
    };
  }

  onChangePubName(e) {
    this.setState({
      pubName: e.target.value
    });
  }

  onChangePubAddress(e) {
    this.setState({
      pubAddress: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPublisher = {
      pubName: this.state.pubName,
      pubAddress: this.state.pubAddress
    };

    console.log(JSON.stringify(newPublisher));

    axios.post(`http://localhost:5000/publishers/add`, newPublisher)
      .then(res => {
        console.log(JSON.stringify(res.data));
        alert(`Publisher created with name: ${newPublisher.pubName}`);
      });

    this.setState({
      pubName: '',
      pubAddress: ''
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Back to List</Link>
        <h3>Create New Publisher</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Publisher Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.pubName}
              onChange={this.onChangePubName}
              required
            />
          </div>
          <div className="form-group">
            <label>Publisher Address: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.pubAddress}
              onChange={this.onChangePubAddress}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create Publisher"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePublisher;