import React from "react";
import { useToast, Button, Input } from "@chakra-ui/core";
import { connect } from "react-redux";

const CompleteTask = (props) => {
  const toast = useToast();
  return (
    <div>
      <h3>{props.task.content}</h3>
      <Input value={props.task.status} />
      <Button>Send Alert</Button>
      <Button
        onClick={async () => {
          await toast({
            title: "Task completed.",
            description: "You completed this task",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          await props.dispatch({
            type: "COMPLETE_TASK",
            payload: {
              task_id: props.task.id,
            },
          });
        }}
      >
        Complete Task
      </Button>
      <h4>{props.task.status}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(CompleteTask);
