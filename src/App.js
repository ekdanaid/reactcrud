import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainContainer from './containers/main';
import CreateContainer from './containers/create';
import EditComponent from './components/edit';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={MainContainer} />
            <Route path="/create" component={CreateContainer} />
            <Route path="/edit/:id" component={EditComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
