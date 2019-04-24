import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      keyword: '',
      sorted: false,
      list: this.props.result,
      name: '',
      lname: ''
    };
  }

  sorted = () => {
    this.setState({
      list: this.state.list.reverse(),
      sorted: !this.state.sorted
    });
  };

  render() {
    return (
      <div>
        <form className="col-12">
          <div className="d-flex justify-content-center ">
            <div className="form-group col-md-8">
              <div className="container">
                <label className="col-form-label ">Name : </label>
                <input
                  className="form-control col-md-12 col-sm-12"
                  type="text"
                />
                <label className="col-form-label">Lastname : </label>
                <input
                  className="form-control col-md-12 col-sm-12"
                  type="text"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
