import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonText } from "@chakra-ui/core";
export class TaskPage extends Component {
  componentDidMount() {
    //this.props.dispatch({ type: "FETCH_TASKS" });
  }
  render() {
    return (
      <>
        {this.props.tasks ? (
          this.props.tasks.map((x) => (
            <Button key={x.id}>
              {x.title}
              <div className="btn-text">{x.status}</div>
            </Button>
          ))
        ) : (
          <div>No Tasks to Display</div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user: state.user,
  };
};
export default connect(mapStateToProps)(TaskPage);
