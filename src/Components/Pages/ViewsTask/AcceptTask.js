import React, { Component } from "react";
import { Button } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class AcceptTask extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.task.title}</h2>
        <h3>{this.props.task.content}</h3>
        <Button
          className="active"
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
export default withRouter(connect(mapStateToProps)(AcceptTask));
