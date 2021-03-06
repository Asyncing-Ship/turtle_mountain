import React from "react";
import { Button } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const AcceptTask = (props) => {
  return (
    <>
      <Button
        size="sm"
        rightIcon="edit"
        variantColor="yellow"
        className="new_class_goes_here"
        onClick={async () => {
          // await props.dispatch({
          //   type: "SET_TASK_DETAIL",
          //   payload: {
          //     taskDetail: props.task,
          //   },
          // });
          await props.history.push("/edit");
        }}
      >
        Edit Task
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
