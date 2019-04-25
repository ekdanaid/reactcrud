import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserFormEditComponent extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      sorted: false,
      list: this.props.result,
      name: '',
      lname: ''
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.crud.members[this.props.match.params.id].name,
      lname: this.props.crud.members[this.props.match.params.id].lname
    });
  }
  render() {
    console.log(this.props.crud.members[this.props.match.params.id]);
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
                  id="name"
                  value={this.state.name}
                />
                <label className="col-form-label">Lastname : </label>
                <input
                  className="form-control col-md-12 col-sm-12"
                  type="text"
                  id="lname"
                  value={this.state.lname}
                />
                <br />
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Update"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
