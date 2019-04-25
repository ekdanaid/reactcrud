import React from 'react';
import CreateComponent from '../components/create';
import { connect } from 'react-redux';

import './style.css';
import { bindActionCreators } from 'redux';
import { createNewUser } from '../actions';

// Create container
export class CreateContainer extends React.Component {
  render() {
    return (
      <div className={'main-container'}>
        <CreateComponent {...this.props} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      //Create new User
      createNewUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContainer);
