import React, { Component } from 'react';

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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let user = {
      name: this.state.name,
      lname: this.state.lname,
      id: this.props.match.params.id
    };
    this.props.updateUser(user.name, user.lname, user.id);
    this.props.history.push('/');
  };

  handleChange(e) {
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  componentDidMount() {
    this.setState({
      name: this.props.crud.members[this.props.match.params.id].name,
      lname: this.props.crud.members[this.props.match.params.id].lname
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
                  onChange={e => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
                <label className="col-form-label">Lastname : </label>
                <input
                  className="form-control col-md-12 col-sm-12"
                  type="text"
                  id="lname"
                  onChange={e => this.setState({ lname: e.target.value })}
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
