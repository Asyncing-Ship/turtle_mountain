import React, { Component } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Textarea,
} from "@chakra-ui/core";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import Select from "react-select";

class NewTask extends Component {
  state = {
    title: "",
    content: "",
    select: [],
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_ALL_USERS" });
  }
  handleChange = (event, value) => {
    this.setState({
      [value]: event.target.value,
    });
  };

  handleInputChange = async (event) => {
    await console.log(event.value);
    if (this.state.select.length < 8) {
      await this.setState({ select: [...this.state.select, event.value] });
    }
    await console.log(this.state.select);
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
              user_ids: this.state.select.map((x) => x.id),
            },
          });
          await this.props.history.push("/open");
        }}
      >
        <FormControl textAlign="left" bg="#2f2e2e" p={5} rounded="lg">
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
            isRequired
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
            isRequired
          />
          <Box style={{ backgroundColor: "white" }} mb={5}>
            TAGGED USERS
            {this.state.select.map((x) => (
              <Box>{"@" + x.first_name + " " + x.last_name}</Box>
            ))}
          </Box>
          <small style={{ color: "white" }}>Select User(s) to tag</small>
          <Select
            placeholder="SELECT A USER"
            className="col-12 col-lg-3"
            defaultValue={0}
            options={this.props.users
              .filter((x) => {
                for (let user of this.state.select) {
                  if (user === x) {
                    return false;
                  }
                }
                return true;
              })
              .map((x) => {
                return {
                  label: x.first_name + " " + x.last_name,
                  value: x,
                  key: x.id,
                };
              })}
            onChange={(event) => {
              this.handleInputChange(event);
            }}
          ></Select>
          <Box textAlign="right">
            <Button type="submit" rightIcon="add" variantColor="green">
              Add Task
            </Button>
          </Box>
        </FormControl>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, users: state.users };
};

export default withRouter(connect(mapStateToProps)(NewTask));
