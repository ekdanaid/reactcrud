import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
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
    console.log(this.props.crud);
    return (
      <div className="container">
        <h2>User Database </h2>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success" type="button" onClick="">
            Create
          </button>
        </div>
        <br />
        <UserList {...this.props} />
      </div>
    );
  }
}

export default MainComponent;
