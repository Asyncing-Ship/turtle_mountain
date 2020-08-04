import React, { Component } from "react";
import { Button } from "@chakra-ui/core";

class AcceptTask extends Component {
  render() {
    return (
      <>
        <h2>{this.props.task.title}</h2>
        <h3>{this.props.task.content}</h3>
        <Button>Accept Task</Button>
      </>
    );
  }
}

export default AcceptTask;
