import React from 'react';
import EditComponent from '../components/edit';
import { connect } from 'react-redux';

import './style.css';

// Edit container
export class EditContainer extends React.Component {
  render() {
    return (
      <div className={'main-container'}>
        <EditComponent {...this.props} />
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

export default connect(mapStateToProps)(EditContainer);
