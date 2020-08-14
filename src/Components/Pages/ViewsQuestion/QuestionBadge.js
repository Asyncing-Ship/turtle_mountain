import React from 'react';
import { Box, Badge, Icon } from '@chakra-ui/core';

const QuestionBadge = (props) => {
  return (
    <Box flex="1" textAlign="right">
      <Badge
        variant="subtle"
        variantColor={
          (props.x.is_answered) ? (
            "green"
          ) : (
              (!props.x.is_answered) ? (
                "orange"
              ) : (
                  "blue"
                )
            )
        }
        mb={1}
        mr={3}
      >
        {props.x.is_answered ? "Answered" : "Unanswered"}
        <Icon
          size="13px"
          ml={1}
          mb={0.5}
          name={
            (props.x.is_answered) ? (
              "check"
            ) : (
                (!props.x.is_answered) ? (
                  "question"
                ) : (
                    "check-circle"
                  )
              )
          }
          color={
            (props.x.is_answered) ? (
              "green"
            ) : (
                (!props.x.is_answered) ? (
                  "orange"
                ) : (
                    "blue"
                  )
              )
          }
        />
      </Badge>
    </Box>
  );
}

export default QuestionBadge;