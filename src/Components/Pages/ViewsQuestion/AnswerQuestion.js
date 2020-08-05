import React, { Component } from "react";
import { Input } from "@chakra-ui/core";

class AnswerQuestion extends Component {
  state = { answer: "" };
  handleChange = (event, value) => {
    this.setState({
      [value]: event.target.value,
    });
  };

  render() {
    return (
      <Input
        value={this.state.answer}
        placeholder="Your answer"
        onChange={(event) => this.handleChange(event, "answer")}
      ></Input>
    );
  }
}

export default AnswerQuestion;
