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
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await this.props.dispatch({
              type: "ADD_QUESTION_RESPONSE",
              payload: {
                question_id: this.props.question.id,
                content: this.state.answer,
              },
            });
            await this.setState({ answer: "" });
          }}
        >
          <Input
            value={this.state.answer}
            placeholder="Your answer"
            onChange={(event) => this.handleChange(event, "answer")}
          ></Input>
          <Button type="submit">Submit Answer</Button>
        </form>
      </div>
    );
  }
}
export default connect()(AnswerQuestion);
