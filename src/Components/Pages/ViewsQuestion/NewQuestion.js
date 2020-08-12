import React, { Component } from "react";

import { Input, Button, Box } from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";
import { connect } from "react-redux";
import Select from "react-select";
class NewQuestion extends Component {
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
            type: "ADD_QUESTION",
            payload: {
              title: this.state.title,
              content: this.state.content,
              user_ids: this.state.select.map((x) => x.id),
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
        <Box style={{ backgroundColor: "white" }} mb={5}>
          TAGGED USERS
          {this.state.select.map((x, i) => (
            <Box>
              {"@" + x.first_name + " " + x.last_name}
              <Button
                onClick={() =>
                  this.setState({
                    select: this.state.select.filter((y) => y.id != x.id),
                  })
                }
              >
                x
              </Button>
            </Box>
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
        <Button type="submit">Add Question</Button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(NewQuestion);
