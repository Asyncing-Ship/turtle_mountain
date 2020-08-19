import React from "react";
import {
  Button,
  Box,
  Tag,
  TagLabel,
  TagIcon,
  Flex,
  Text,
} from "@chakra-ui/core";
import moment from "moment";
import Swal from "sweetalert2";
const NewQuestion = (props) => {
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      p={2}
      my={3}
      style={{ backgroundColor: "black" }}
    >
      <Flex>
        {props.response.user.is_admin ? (
          <Tag rounded="full" size="sm" variantColor="purple" mr={2}>
            <TagIcon icon="star" size="10px" />
            <TagLabel>
              {props.response.user.first_name} {props.response.user.last_name}
            </TagLabel>
          </Tag>
        ) : (
          <Tag
            rounded="full"
            size="sm"
            variantColor="yellow"
            mr={2}
            onClick={() => {
              Swal.fire({
                title: "User Tag",
                text:
                  "This tag displays the user who posted a task, question, or response",
                icon: "info",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK!",
              });
            }}
          >
            <TagLabel>
              {props.response.user.first_name} {props.response.user.last_name}
            </TagLabel>
          </Tag>
        )}
        <Text fontSize="0.75rem">
          <i style={{ verticalAlign: "sub" }}>
            at {moment(props.response.date_posted).format("MM/DD/YY LT")}
          </i>
        </Text>
      </Flex>
      <Box>{props.response.content}</Box>
      <Box textAlign="right">
        {!props.verified && !props.questionVerified && (
          <Button
            size="sm"
            variantColor="blue"
            rightIcon="check-circle"
            onClick={() => {
              Swal.fire({
                title: "Mark As Verified",
                text:
                  "When you click this button, it will mark the corresponding response as 'verified'.\n Only one response can be marked verified for each question.\n Once there is a 'verified' response, the question will no longer be considered 'unanswered'. Only admins and the person who posted the question will be able to mark an answer 'verified'. For this example, responses will be re-seeded with a verified and unverified answer ",

                icon: "info",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK!",
              });
              props.setVerified(props.index, props.response.content);
            }}
          >
            Mark As Verified
          </Button>
        )}
        {props.verified && (
          <Tag rounded="full" size="sm" variantColor="blue">
            <TagLabel>Verified</TagLabel>
            <TagIcon icon="check-circle" />
          </Tag>
        )}
      </Box>
    </Box>
  );
};
export default NewQuestion;
