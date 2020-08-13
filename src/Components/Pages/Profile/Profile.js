import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Textarea, FormControl } from '@chakra-ui/core';

class Profile extends Component {
  state = {
    subject: '',
    message: '',
  }

  render() {
    return (
      <>
        <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
        <p>{this.props.user.email}</p>
        <FormControl>
          <Input
            value={this.state.subject}
            onChange={(e) => this.setState({ subject: e.target.value })}
            placeholder="Email subject..."
          />
          <Textarea
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="Email body..."
          />
        </FormControl>
        <Button
          m={2}
          variantColor="blue"
          onClick={() => {
            if (this.state.subject && this.state.message) {
              this.props.dispatch({ type: "SEND_EMAIL", payload: this.state });
            } else {
              console.log('Please enter a valid message! Inputs cannot be empty.');
            }
          }}
        >
          Send Test Email
        </Button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Profile);