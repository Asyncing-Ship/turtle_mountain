import React, { Component } from "react";
import { Input, Button } from "@chakra-ui/core";
import { connect } from "react-redux";

class AnswerQuestion extends Component {
  state = { answer: "" };
  handleChange = (event, value) => {
    this.setState({
      [value]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.answer}
          placeholder="Your answer"
          onChange={(event) => this.handleChange(event, "answer")}
        ></Input>
        <Button
          onClick={() =>
            this.props.dispatch({
              type: "ANSWER_QUESTION",
              payload: { id: this.props.question.id },
            })
          }
        ></Button>
      </div>
    );
  }
}

export default connect()(AnswerQuestion);
