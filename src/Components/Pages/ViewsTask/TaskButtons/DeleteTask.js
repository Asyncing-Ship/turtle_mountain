import React from "react";
import { Button, useToast } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const AcceptTask = (props) => {
  const toast = useToast();
  return (
    <>
      <Button
        ml={2}
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
          props.dispatch({
            type: "COMPLETE_TASK",
            payload: {
              task_id: props.task.id,
            },
          });
          await props.history.push("/open");
        }}
      >
        Delete Task
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
