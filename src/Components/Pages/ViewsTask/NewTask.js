import React, { Component } from "react";
import { Input, Button, FormControl } from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class NewTask extends Component {
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
      <FormControl
        onSubmit={async (event) => {
          event.preventDefault();
          await this.props.dispatch({
            type: "ADD_TASK",
            payload: {
              title: this.state.title,
              content: this.state.content,
              user: this.props.user.id,
            },
          });
          await this.props.history.push("/tasks");
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
        <Button type="submit">Add Task</Button>
      </FormControl>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NewTask));
