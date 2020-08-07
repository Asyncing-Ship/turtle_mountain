import React from 'react';
import { Box, Badge, Icon } from '@chakra-ui/core';

const TaskBadge = (props) => {
  return (
    <Box flex="1" textAlign="right">
      <Badge
        variant="subtle"
        variantColor={
          (props.x.status === "Complete") ? (
            "green"
          ) : (
              (props.x.status === "In Progress") ? (
                "orange"
              ) : (
                  "blue"
                )
            )
        }
        mb={1}
        mr={3}
      >
        {props.x.status}
        <Icon
          size="13px"
          ml={1}
          name={
            (props.x.status === "Complete") ? (
              "check"
            ) : (
                (props.x.status === "In Progress") ? (
                  "time"
                ) : (
                    "info"
                  )
              )
          }
          color={
            (props.x.status === "Complete") ? (
              "green"
            ) : (
                (props.x.status === "In Progress") ? (
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

export default TaskBadge;