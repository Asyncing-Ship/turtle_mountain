import React, { Component } from "react";
import { Button } from "@chakra-ui/core";
import { connect } from "react-redux";

class AcceptTask extends Component {
  render() {
    return (
      <>
        <h3>{this.props.task.added_by}</h3>
        <h2>{this.props.task.title}</h2>
        <h3>{this.props.task.content}</h3>
        <Button
          onClick={async () => {
            await this.props.dispatch({
              type: "UPDATE_TASK",
              payload: {
                task_id: this.props.task.id,
                assigned_to: this.props.user.id,
              },
            });
            await this.props.history.push("/tasks");
          }}
        >
          Accept Task
        </Button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: this.state.user };
};
export default connect(mapStateToProps)(AcceptTask);
