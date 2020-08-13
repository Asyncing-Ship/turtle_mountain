import React from "react";
import { Button, Box, Icon } from "@chakra-ui/core";
import { connect } from "react-redux";
import moment from 'moment'
const NewQuestion = (props) => {
  return (
    <div>
      <Box>
        <u>
          {props.response.user.first_name} {props.response.user.last_name}
        </u>
      </Box>
      <Box mb={3}>
        {console.log(props.posted_by, props.user.id, props.user.is_admin)}
        {props.response.content}
        {!props.response.verified &&
          !props.questionVerified &&
          (props.user.is_admin || props.posted_by === props.user.id) && (
            <Button
              onClick={() => {
                console.log(props.question);
                props.dispatch({
                  type: "MARK_AS_ANSWER",
                  payload: {
                    id: props.response.id,
                    question_id: props.response.questionId,
                  },
                });
              }}
            >
              Mark As Verified
              <Icon name="check" />
            </Button>
          )}
        {props.response.verified && <Icon name="check-circle"></Icon>}
      </Box>
      <Box flex="1" textAlign="left">
        <small>
          <i>
            Posted at:{" "}
            {moment(props.response.date_posted).format("MM/DD/YY LT")} (By{" "}
            {props.response.user.first_name} {props.response.user.last_name})
          </i>
        </small>
      </Box>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(NewQuestion);
