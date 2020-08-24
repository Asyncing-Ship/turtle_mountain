import React from "react";
import { Button, Input, Box } from "@chakra-ui/core";
import { connect } from "react-redux";
import moment from "moment";
const CompleteTask = (props) => {
  return (
    <div>
      <h3>{props.task.content}</h3>
      <Box flex="1" textAlign="left">
        <small>
          <i>
            Posted at: {moment(props.task.date_posted).format("MM/DD/YY LT")}{" "}
            (By {props.task.first_name} {props.task.last_name})
          </i>
        </small>
      </Box>
      <Box textAlign="right">
        <Input
          rounded="md"
          size="sm"
          mt={3}
          placeholder="Enter your response..."
        />
        <Button size="sm" rightIcon="bell" variantColor="yellow" mt={3} ml={3}>
          Send Response
        </Button>
        <Button
          size="sm"
          rightIcon="check"
          variantColor="green"
          mt={3}
          ml={3}
          onClick={async () => {
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
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(CompleteTask);
