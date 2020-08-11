import React from "react";
import { Button, useToast, Box } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const AcceptTask = (props) => {
  const toast = useToast();
  return (
    <div>
      <Button
        alignContent="right"
        size="sm"
        rightIcon="delete"
        variantColor="red"
        className="new_class_goes_here"
        onClick={async () => {
          await toast({
            title: "Delete task.",
            description: "Delete this task",
            status: "delete",
            duration: 5000,
            isClosable: true,
          });
          await props.dispatch({
            type: "DELETE_TASK",
            payload: {
              task_id: props.task.id,
            },
          });
          await props.history.push("/tasks");
        }}
      >
        Delete Task
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
