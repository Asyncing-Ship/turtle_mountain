import React from "react";
import { Button } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Swal from "sweetalert2";

const AcceptTask = (props) => {
  return (
    <>
      <Button
        ml={2}
        size="sm"
        rightIcon="delete"
        variantColor="red"
        className="new_class_goes_here"
        onClick={async () => {
          Swal.fire({
            title: "Confirm",
            text: "Are you 100% committed to deleting this task?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.value) {
              props.dispatch({
                type: "COMPLETE_TASK",
                payload: {
                  task_id: props.task.id,
                },
              });
              props.history.push("/open");
            }
          });
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
