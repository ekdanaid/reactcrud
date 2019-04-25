import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserList extends Component {
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

  deleteUser = (e, index) => {
    e.preventDefault();
    this.props.removeUser(index);
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="col-6">Name</th>
              <th className="col-3">Last</th>
              <th className="col-1" />
              <th className="col-1" />
            </tr>
          </thead>
          <tbody>
            {this.props.crud.members.map((snapshot, i) => {
              return [
                <tr key={i}>
                  <td>{snapshot.name}</td>
                  <td>{snapshot.lname}</td>
                  <td>
                    <Link to={`/edit/${i}`} className="btn btn-primary">
                      View
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={e => this.deleteUser(e, i)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ];
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
