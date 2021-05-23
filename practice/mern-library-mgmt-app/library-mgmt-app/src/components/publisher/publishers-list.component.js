import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Publisher = props => (
  <tr>
    <td>{props.publisher.pubName}</td>
    <td>{props.publisher.pubAddress}</td>
    <td>
      <span className="action-link">
        <Link to={`/publishers/edit/${props.publisher._id}`}>Edit</Link>
      </span>
      <span className="action-link">
        <a href="#"
           onClick={() => {props.deletePublisher(props.publisher._id)}}>
          Delete
        </a>
      </span>
    </td>
  </tr>
);

class PublishersList extends Component {

  constructor(props) {
    super(props);

    this.deletePublisher = this.deletePublisher.bind(this);

    this.state = {
      publishers: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/publishers/`)
      .then(response => {
        console.log(response.data);
        this.setState({
          publishers: response.data
        });
      })
      .catch(error => console.log(error));
  }

  deletePublisher(id) {
    axios.delete(`http://localhost:5000/publishers/${id}`)
      .then(res => console.log(res.data));

    this.setState({
      publishers: this.state.publishers.filter(publisher => publisher._id !== id)
    });
  }

  showPublisherList() {
    return this.state.publishers.map(currentPublisher => {
      return <Publisher publisher={currentPublisher}
                     deletePublisher={this.deletePublisher}
                     key={currentPublisher._id} />
    });
  }

  render() {
    return (
      <div>
        <h3>All Registered Publishers</h3>

        <table className="table">
          <thead className="thead-light">
          <tr>
            <th>Publisher Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            { this.showPublisherList() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default PublishersList;