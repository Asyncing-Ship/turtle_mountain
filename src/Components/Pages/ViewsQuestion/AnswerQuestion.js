import React, { Component } from "react";
import { Input, Button, FormControl } from "@chakra-ui/core";
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
      <>
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
            await this.props.dispatch({ type: "FETCH_QUESTIONS" });
            await this.props.dispatch({
              type: "FETCH_QUESTION_RESPONSES",
              payload: { question_id: this.props.question.id },
            });
            await this.setState({ answer: "" });
          }}
        >
          <FormControl isRequired>
            <Input
              rounded="md"
              size="sm"
              value={this.state.answer}
              placeholder="Enter your answer..."
              onChange={(event) => this.handleChange(event, "answer")}
            />
            <Button
              size="sm"
              variantColor="green"
              rightIcon="check"
              mt={3}
              type="submit"
            >
              Submit Answer
          </Button>
          </FormControl>
        </form>
      </>
    );
  }
}
export default connect()(AnswerQuestion);
