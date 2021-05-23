import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditPublisher extends Component {

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

  componentDidMount() {
    axios.get(`http://localhost:5000/publishers/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          pubName: response.data.pubName,
          pubAddress: response.data.pubAddress
        });
      })
      .catch(error => console.log(error));
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

    const publisher = {
      pubName: this.state.pubName,
      pubAddress: this.state.pubAddress
    };

    console.log(JSON.stringify(publisher));

    axios.put(`http://localhost:5000/publishers/${this.props.match.params.id}`, publisher)
      .then(res => console.log(res.data));

    window.location = '/publishers';
  }

  render() {
    return (
      <div>
        <Link to="/publishers">Back to All Publishers</Link>
        <h3>Edit Publisher</h3>
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
            <label>Address: </label>
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
              value="Edit Publisher"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditPublisher;