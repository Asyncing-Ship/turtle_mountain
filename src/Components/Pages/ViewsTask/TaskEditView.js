import React, { Component } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Textarea,
  Stack,
  IconButton,
  Tag,
} from "@chakra-ui/core";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import Select from "react-select";

class EditTaskView extends Component {
  state = {
    id: this.props.tasks.taskDetail.taskDetail.id,
    title: this.props.tasks.taskDetail.taskDetail.title,
    content: this.props.tasks.taskDetail.taskDetail.content,
    select: [],
    maxTitle: 50,
    maxContent: 1000,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_ALL_USERS" });
    console.log("edit task view loaded");
    // this.setState({
    //   title: this.props.tasks.taskDetail.title,
    // });
    console.log(JSON.stringify(this.props.tasks.taskDetail.taskDetail.title));
  }

  handleChange = (event, value, maxChars) => {
    if (event.target.value.length <= maxChars) {
      this.setState({
        [value]: event.target.value,
      });
    }
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
            type: "UPDATE_TASK",
            payload: {
              id: this.state.id,
              title: this.state.title,
              content: this.state.content,
            },
          });
          await this.props.history.push("/open");
        }}
      >
        <FormControl textAlign="left" bg="#2f2e2e" p={5} rounded="lg">
          <Heading color="#f5fffe">Edit Task</Heading>
          <FormLabel htmlFor="task-title">Task Title</FormLabel>
          <Input
            _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
            autoComplete="off"
            id="task-title"
            value={this.state.title}
            onChange={(event) =>
              this.handleChange(event, "title", this.state.maxTitle)
            }
            value={this.state.title}
            variant="filled"
            isRequired
          />
          <Box mb={5}>
            <small style={{ color: "white" }}>
              Characters: {this.state.title.length}/{this.state.maxTitle}
            </small>
          </Box>
          <FormLabel htmlFor="task-body">Description</FormLabel>
          <Textarea
            _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
            id="task-body"
            placeholder="Describe the task..."
            onChange={(event) =>
              this.handleChange(event, "content", this.state.maxContent)
            }
            value={this.state.content}
            variant="filled"
            resize="vertical"
            isRequired
          />
          <Box mb={5}>
            <small style={{ color: "white" }}>
              Characters: {this.state.content.length}/{this.state.maxContent}
            </small>
          </Box>
          <Box
            rounded="md"
            style={{ backgroundColor: "white" }}
            px={4}
            py={2}
            mb={3}
          >
            Users to notify
            <Stack w="fit-content">
              {this.state.select.map((x) => (
                <Tag w="auto" size="md" variantColor="purple" p={1}>
                  @{x.first_name} {x.last_name}
                  <Box flex={1} textAlign="right">
                    <IconButton
                      variantColor="red"
                      icon="close"
                      size="xs"
                      ml={3}
                      onClick={() =>
                        this.setState({
                          select: this.state.select.filter(
                            (y) => y.id !== x.id
                          ),
                        })
                      }
                    />
                  </Box>
                </Tag>
              ))}
            </Stack>
          </Box>
          <small style={{ color: "#f5fffe" }}>Select Users to notify</small>
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
            <Button my={3} type="submit" rightIcon="add" variantColor="green">
              Update Task
            </Button>
          </Box>
        </FormControl>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, users: state.users, tasks: state.tasks };
};

export default withRouter(connect(mapStateToProps)(EditTaskView));
