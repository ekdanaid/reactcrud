import React, { Component } from 'react';

export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      keyword: '',
      sorted: false,
      list: this.props.result
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
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="col-6">Name</th>
              <th className="col-3">Last</th>
              <th className="col-1" />
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td />
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
