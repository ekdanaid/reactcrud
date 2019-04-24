import React from 'react';
import CreateComponent from '../components/create';
import { connect } from 'react-redux';

import './style.css';

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

export default connect(mapStateToProps)(CreateContainer);
