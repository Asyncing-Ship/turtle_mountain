import React from 'react';
import { Box, Badge, Icon } from '@chakra-ui/core';

const QuestionBadge = (props) => {
  return (
    <Box flex="1" textAlign="right">
      <Badge
        variant="subtle"
        variantColor={
          (props.x.is_verified) ? (
            "green"
          ) : (
              (props.x.is_answered && !props.x.is_verified) ? (
                "blue"
              ) : (
                  "orange"
                )
            )
        }
        mb={1}
        mr={3}
      >
        {
          (props.x.is_verified) ? (
            "Answered, Verified"
          ) : (
              (props.x.is_answered && !props.x.is_verified) ? (
                "Answered, Unverified"
              ) : (
                  "Unanswered"
                )
            )
        }
        <Icon
          size="13px"
          ml={1}
          mb={0.5}
          name={
            (props.x.is_verified) ? (
              "check"
            ) : (
                (props.x.is_answered && !props.x.is_verified) ? (
                  "question"
                ) : (
                    "not-allowed"
                  )
              )
          }
          color={
            (props.x.is_verified) ? (
              "green"
            ) : (
                (props.x.is_answered && !props.x.is_verified) ? (
                  "blue"
                ) : (
                    "orange"
                  )
              )
          }
        />
      </Badge>
    </Box>
  );
}

export default QuestionBadge;