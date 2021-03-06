import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import { Link } from 'react-router-dom';
class MainComponent extends Component {
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
        <h2>User List </h2>
        <div className="d-flex justify-content-end">
          <Link to={'/create'} className="btn btn-success">
            Create
          </Link>
        </div>
        <br />
        <UserList {...this.props} />
      </div>
    );
  }
}

export default MainComponent;
