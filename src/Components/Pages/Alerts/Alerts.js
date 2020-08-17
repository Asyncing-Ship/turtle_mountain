import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alerts extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_NOTIFICATIONS', payload: this.props.user.id });
  }

  render() {
    return (
      <>
        {this.props.notis.map((x, i) =>
          <div key={i}>
            asdf
          </div>
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notis: state.notis,
  }
}

export default connect(mapStateToProps)(Alerts);