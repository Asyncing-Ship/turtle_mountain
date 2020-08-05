import React from "react";
import { Button, useToast } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const AcceptTask = (props) => {
  const toast = useToast();
  return (
    <div>
      <h3>{props.task.content}</h3>
      <Button
        className="new_class_goes_here"
        onClick={async () => {
          await toast({
            title: "Task accepted.",
            description: "You accepted this task",
            status: "success",
            duration: 5000,

            isClosable: true,
          });
          await props.dispatch({
            type: "ACCEPT_TASK",
            payload: {
              task_id: props.task.id,
            },
          });
          await props.history.push("/tasks");
        }}
      >
        Accept Task
      </Button>
      <h4>{props.task.status}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
