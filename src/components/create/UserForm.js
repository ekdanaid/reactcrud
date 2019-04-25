import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
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

  navigationToHome = () => {
    return <Link to={'/'} />;
  };

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      name: this.state.name,
      lname: this.state.lname
    };
    this.setState({
      name: '',
      lname: ''
    });
    this.props.createNewUser(user.name, user.lname);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="col-12" onSubmit={this.handleSubmit}>
          <div className="d-flex justify-content-center ">
            <div className="form-group col-md-8">
              <div className="container">
                <label className="col-form-label ">Name : </label>
                <input
                  className="form-control col-md-12 col-sm-12"
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <label className="col-form-label">Lastname : </label>
                <input
                  className="form-control col-md-12 col-sm-12"
                  type="text"
                  id="lname"
                  onChange={this.handleChange}
                  value={this.state.lname}
                />
                <br />
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Create"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
