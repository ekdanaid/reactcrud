import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserFormCreate';
class CreateComponent extends Component {
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
        <h2>Create User </h2>
        <div className="d-flex">
          <Link to={'/'} className="btn btn-primary">
            Back
          </Link>
        </div>
        <br />
        <UserForm {...this.props} />
      </div>
    );
  }
}

export default CreateComponent;
