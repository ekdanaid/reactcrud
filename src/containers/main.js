import React from 'react';
import MainComponent from '../components/home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeUser } from '../actions';

import './style.css';

// Main container
export class MainContainer extends React.Component {
  render() {
    return (
      <div className={'main-container'}>
        <MainComponent {...this.props} />
      </div>
    );
  }
}

// reducer
const mapStateToProps = state => {
  return {
    crud: state.crud
  };
};

// function
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      //remove action
      removeUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
