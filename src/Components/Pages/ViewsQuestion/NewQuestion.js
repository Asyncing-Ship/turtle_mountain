// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// Chakra-ui imports:
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Textarea,
  IconButton,
  Tag,
  Stack,
} from "@chakra-ui/core";
// React Redux Imports:
import { connect } from "react-redux";
// React Select Import:
import Select from "react-select";
// ----- End of imports -----

class NewQuestion extends Component {
  state = {
    title: "",
    content: "",
    select: [],
    maxCharsTitle: 50,
    maxCharsDesc: 1000,
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
      <>
        {/* Start of form */}
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await this.props.dispatch({
              type: "ADD_QUESTION",
              payload: {
                title: this.state.title,
                content: this.state.content,
                user_ids: this.state.select.map((x) => x.id),
              },
            });
            await this.props.history.push("/recent");
          }}
        >
          <FormControl textAlign="left" bg="#2f2e2e" p={5} rounded="lg">
            <Heading color="#f5fffe">New Question</Heading>
            <FormLabel htmlFor="task-title">Question Title</FormLabel>
            <Input
              _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
              autoComplete="off"
              id="task-title"
              aria-required="true"
              placeholder="Task Title"
              onChange={(event) => {
                this.handleChange(event, "title", this.state.maxCharsTitle);
              }}
              value={this.state.title}
              variant="filled"
              isRequired
            />

            <Box mb={5}>
              <small style={{ color: "white" }}>
                Characters: {this.state.title.length}/{this.state.maxCharsTitle}
              </small>
            </Box>
            <FormLabel htmlFor="task-body">Description</FormLabel>
            <Textarea
              _focus={{ bg: "#f5fffe", border: "2px solid #3182ce" }}
              id="task-body"
              placeholder="Describe the task..."
              onChange={(event) => {
                this.handleChange(event, "content", this.state.maxCharsDesc);
              }}
              value={this.state.content}
              variant="filled"
              resize="vertical"
              isRequired
            />
            <Box mb={5}>
              <small style={{ color: "white" }}>
                Characters: {this.state.content.length}/
                {this.state.maxCharsDesc}
              </small>
            </Box>
            <Box rounded="md" style={{ backgroundColor: "white" }} px={4} py={2} mb={3}>
              Tagged Users
              <Stack>
                {this.state.select.map((x) => (
                  <Tag
                    w="fit-content"
                    size="md"
                    variantColor="blue"
                    p={1}
                  >
                    {"@" + x.first_name + " " + x.last_name}
                    <IconButton
                      variantColor="red"
                      icon="close"
                      size="xs"
                      ml={3}
                      onClick={() =>
                        this.setState({
                          select: this.state.select.filter((y) => y.id !== x.id),
                        })
                      }
                    ></IconButton>
                  </Tag>
                ))}
              </Stack>
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
                Add Question
              </Button>
            </Box>
          </FormControl>
        </form>
        {/* End of form */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(NewQuestion);
