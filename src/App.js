import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainContainer from './containers/main';
import CreateContainer from './containers/create';
import EditContainer from './containers/edit';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={MainContainer} />
            <Route path="/create" component={CreateContainer} />
            <Route path="/edit/:id" component={EditContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
