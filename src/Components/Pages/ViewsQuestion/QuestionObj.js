import { connect } from "react-redux";
import React from "react";
import { Box, Button } from "@chakra-ui/core";
import DeleteQuestion from "./QuestionButtons/DeleteQuestion";
import AnswerQuestion from "./AnswerQuestion";
import Response from "./Response";
import moment from "moment";
const QuestionObj = (props) => {
  return (
    <div>
      {props.x.content}
      <Box flex="1" textAlign="left">
        <small>
          <i>
            Posted at: {moment(props.x.date_posted).format("MM/DD/YY LT")} (By{" "}
            {props.x.user.first_name} {props.x.user.last_name})
          </i>
        </small>
      </Box>
      {props.user.is_admin &&
        (!props.x.is_frequent ? (
          <Box flex="1" textAlign="left">
            <Button
              variantColor="green"
              onClick={() => {
                props.dispatch({
                  type: "MARK_AS_FREQUENT",
                  payload: { question_id: props.x.id },
                });
              }}
            >
              Mark as frequent
            </Button>
          </Box>
        ) : (
          <Box flex="1" textAlign="left">
            <Button
              variantColor="green"
              onClick={() => {
                props.dispatch({
                  type: "MARK_AS_INFREQUENT",
                  payload: { question_id: props.x.id },
                });
              }}
            >
              Remove from frequent
            </Button>
          </Box>
        ))}
      {props.user.id === props.x.user.id && (
        <DeleteQuestion question={props.x} />
      )}
      <Box m={3}>
        <strong>Responses</strong>
      </Box>
      <Box textAlign="right" m={3}>
        {/* This is the button and input field */}
        <AnswerQuestion question={props.x} />
      </Box>
      <Box m={3}>
        {props.response.map((y, j) => (
          <Response
            key={j}
            response={y}
            questionVerified={props.x.is_verified}
            posted_by={props.x.userId}
          />
        ))}
      </Box>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    response: state.questions.questionsResponse,
  };
};
export default connect(mapStateToProps)(QuestionObj);
