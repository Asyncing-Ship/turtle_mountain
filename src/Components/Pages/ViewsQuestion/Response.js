import React from "react";
import { Button, Box, Tag, TagLabel, TagIcon, Flex, Text } from "@chakra-ui/core";
import { connect } from "react-redux";
import moment from "moment";
const NewQuestion = (props) => {
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      p={2}
      my={3}
      style={{ backgroundColor: 'black' }}
    >
      <Flex>
        {
          props.response.user.is_admin ?
            <Tag
              rounded="full"
              size="sm"
              variantColor="purple"
              mr={2}
            >
              <TagIcon icon="star" size="10px" />
              <TagLabel>{props.response.user.first_name} {props.response.user.last_name}</TagLabel>
            </Tag>
            :
            <Tag
              rounded="full"
              size="sm"
              variantColor="yellow"
              mr={2}
            >
              <TagLabel>{props.response.user.first_name} {props.response.user.last_name}</TagLabel>
            </Tag>
        }
        <Text fontSize="0.75rem">
          <i style={{ verticalAlign: 'sub' }}>
            at{" "}
            {moment(props.response.date_posted).format("MM/DD/YY LT")}
          </i>
        </Text>
      </Flex>
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
