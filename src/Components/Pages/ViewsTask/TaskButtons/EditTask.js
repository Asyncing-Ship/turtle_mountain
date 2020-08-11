import React from "react";
import { Button, useToast, Box } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const AcceptTask = (props) => {
  const toast = useToast();
  return (
    <div>
      <Button
        size="sm"
        rightIcon="edit"
        variantColor="yellow"
        className="new_class_goes_here"
        onClick={async () => {
          await toast({
            title: "Task edit.",
            description: "Edit this task",
            status: "edit",
            duration: 5000,
            isClosable: true,
          });
          await props.dispatch({
            type: "EDIT_TASK",
            payload: {
              task_id: props.task.id,
            },
          });
          await props.history.push("/edit");
        }}
      >
        Edit Task
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
