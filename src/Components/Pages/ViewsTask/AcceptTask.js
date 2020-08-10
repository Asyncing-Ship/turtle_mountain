import React from "react";
import { Button, useToast, Box } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const AcceptTask = (props) => {
  const toast = useToast();
  return (
    <div>
      <h3>{props.task.content}</h3>
      <Box textAlign="right">
        <Button
          size="sm"
          rightIcon="check"
          variantColor="green"
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
            await props.history.push("/my");
          }}
        >
          Accept Task
        </Button>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
