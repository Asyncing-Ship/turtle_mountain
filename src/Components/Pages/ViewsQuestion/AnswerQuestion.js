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
            await this.props.dispatch({
              type: "ADD_NOTIFICATIONS",
              payload: {
                type: "answered a question you created",
                preview: this.props.question.title,
                first_name: this.props.user.first_name,
                last_name: this.props.user.last_name,
                is_admin: this.props.user.is_admin,
              },
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AnswerQuestion);
