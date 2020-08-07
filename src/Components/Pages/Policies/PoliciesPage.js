import React, { Component } from 'react';
import Upload from './Upload';
import { connect } from 'react-redux';

class PoliciesPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_POLICIES' });
  }

  render() {
    return (
      <>
        This is the policy page!
        <Upload />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    policies: state.policies,
  }
}

export default connect(mapStateToProps)(PoliciesPage);