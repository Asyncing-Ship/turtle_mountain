import React from "react";
import { Button, useToast, Box } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const AcceptTask = (props) => {
  const toast = useToast();

  if (props.task.user_id === props.user.id) {
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
          <EditTask task={props.task} />
          <DeleteTask task={props.task} />
        </Box>
        {props.tags[0] &&
          props.tags[0].tagged_users &&
          props.tags[0].tagged_users.map((x) => <span>@{x} </span>)}
        <Box>
          {props.tags.map((x) => (
            <span>
              @{x.first_name} {x.last_name}{" "}
            </span>
          ))}
        </Box>
      </div>
    );
  } else {
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
        {props.tags[0] &&
          props.tags[0].tagged_users &&
          props.tags[0].tagged_users.map((x) => <span>@{x} </span>)}
        <Box>
          {props.tags.map((x) => (
            <span>
              @{x.first_name} {x.last_name}{" "}
            </span>
          ))}
        </Box>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user, tags: state.tasks.taskTags };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
