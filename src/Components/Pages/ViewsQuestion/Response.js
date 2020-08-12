import React, { Component } from "react";
import { Input, Button, Box, Icon } from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";
import { connect } from "react-redux";
const NewQuestion = (props) => {
  return (
    <div>
      <Box>
        <u>
          {props.question.user.first_name} {props.question.user.last_name}
        </u>
      </Box>
      <Box mb={3}>
        {props.question.content}
        {!props.question.verified && (
          <Button
            onClick={() => {
              console.log(props.question);
              props.dispatch({
                type: "MARK_AS_ANSWER",
                payload: {
                  id: props.question.id,
                  question_id: props.question.questionId,
                },
              });
            }}
          >
            Mark As Verified
            <Icon name="check" />
          </Button>
        )}
        {props.question.verified && <Icon name="check-circle"></Icon>}
      </Box>
    </div>
  );
};
export default connect()(NewQuestion);
