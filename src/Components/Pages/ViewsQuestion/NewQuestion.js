import React, { Component } from "react";

import { Input, Button } from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";
import { connect } from "react-redux";
class NewQuestion extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (event, value) => {
    this.setState({
      [value]: event.target.value,
    });
  };
  render() {
    return (
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await this.props.dispatch({
            type: "ADD_QUESTION",
            payload: {
              title: this.state.title,
              content: this.state.content,
            },
          });
          await this.props.history.push("/questions");
        }}
      >
        <Input
          placeholder="Title"
          onChange={(event) => this.handleChange(event, "title")}
          value={this.state.title}
        />
        <Textarea
          placeholder="Detailed Description"
          onChange={(event) => this.handleChange(event, "content")}
          value={this.state.content}
        />
        <Input placeholder="Tag other users!" />
        <Button type="submit">Add Question</Button>
      </form>
    );
  }
}

export default connect()(NewQuestion);
