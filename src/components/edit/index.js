import React, { Component } from 'react';
import '../home/App.css';
import { Link } from 'react-router-dom';

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      keyword: ''
    };
  }

  render() {
    return (
      <div className="container">
        <h2>Edit User </h2>
        <div className="d-flex">
          <Link to={'/'} className="btn btn-primary">
            Back
          </Link>
        </div>
        <br />
      </div>
    );
  }
}

export default EditComponent;
