import React, { Component } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
  Heading
} from "@chakra-ui/core";
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
      <form
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
          await this.props.history.push("/open");
        }}
      >
        <FormControl textAlign="left" bg="#2f2e2e" p={5} rounded="lg" isRequired>
          <Heading color="#f5fffe">New Task</Heading>
          <FormLabel htmlFor="task-title">Task Title</FormLabel>
          <Input
            _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
            autoComplete="off"
            id="task-title"
            aria-required="true"
            placeholder="Task Title"
            onChange={(event) => this.handleChange(event, "title")}
            value={this.state.title}
            variant="filled"
            mb={5}
          />
          <FormLabel htmlFor="task-body">Description</FormLabel>
          <Textarea
            _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
            id="task-body"
            placeholder="Describe the task..."
            onChange={(event) => this.handleChange(event, "content")}
            value={this.state.content}
            variant="filled"
            resize="vertical"
            mb={5}
          />
          <InputGroup>
            <InputLeftElement
              children={
                <Icon
                  name="at-sign"
                  color="gray.400"
                />
              }
            />
            <Input
              _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
              variant="filled"
              placeholder="Tag other users"
              mb={5}
            />
          </InputGroup>
          <Box textAlign="right">
            <Button
              type="submit"
              rightIcon="add"
              variantColor="green"
            >
              Add Task
            </Button>
          </Box>
        </FormControl>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NewTask));
