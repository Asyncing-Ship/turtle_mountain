import React from "react";
import { Button, Box, Icon, Tag, TagLabel, TagIcon } from "@chakra-ui/core";
import { connect } from "react-redux";
const NewQuestion = (props) => {
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      p={3}
      my={3}
      style={{ backgroundColor: 'black' }}
    >
      <Box>
        <u>{props.response.user.first_name} {props.response.user.last_name}</u>
      </Box>
      <Box>
        {props.response.content}
      </Box>
      <Box textAlign="right">
        {/* {console.log(props.posted_by, props.user.id, props.user.is_admin)} */}
        {!props.response.verified &&
          !props.questionVerified &&
          (props.user.is_admin || props.posted_by === props.user.id) && (
            <Button
              size="sm"
              variantColor="blue"
              rightIcon="check-circle"
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
            </Button>
          )}
        {
          props.response.verified &&
          <Tag
            rounded="full"
            size="sm"
            variantColor="blue"
          >
            <TagLabel>Verified</TagLabel>
            <TagIcon icon="check-circle" />
          </Tag>
        }
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(NewQuestion);
