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

class NewTask extends Component {
  state = {
    title: "",
    content: "",
    select: [],
    maxTitle: 50,
    maxContent: 1000,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_ALL_USERS" });
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
            type: "ADD_TASK",
            payload: {
              title: this.state.title,
              content: this.state.content,
              user_ids: this.state.select.map((x) => x.id),
            },
          });
          for (let option of this.state.select) {
            await this.props.dispatch({
              type: "ADD_NOTIFICATIONS",
              payload: {
                userId: option.id,
                type: "tagged you in a task",
                preview: this.state.title,
                first_name: this.props.user.first_name,
                last_name: this.props.user.last_name,
                is_admin: this.props.user.is_admin,
              },
            });
          }
          await this.props.history.push("/tasks/open");
        }}
      >
        <FormControl textAlign="left" bg="#2f2e2e" p={5} rounded="lg">
          <Heading color="#f5fffe">New Task {JSON.stringify(this.state[2])}</Heading>
          <FormLabel htmlFor="task-title">Task Title</FormLabel>
          <Input
            _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
            autoComplete="off"
            id="task-title"
            aria-required="true"
            placeholder="Task Title"
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
                if (!x.is_approved) return false;
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
