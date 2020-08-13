import React from "react";
import { useToast, Button, Input, Box, Flex } from "@chakra-ui/core";
import { connect } from "react-redux";

const CompleteTask = (props) => {
  const toast = useToast();
  return (
    <div>
      <h3>{props.task.content}</h3>
      <Flex>
        <Input flex="7" size="sm" mt={3} />
        <Box textAlign="right">
          <Button
            size="sm"
            rightIcon="bell"
            variantColor="yellow"
            mt={3}
            ml={3}
          >
            Send Response
          </Button>
          <Button
            size="sm"
            rightIcon="check"
            variantColor="green"
            mt={3}
            ml={3}
            onClick={async () => {
              await toast({
                title: "Task completed.",
                description: "You completed this task",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
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
      </Flex>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(CompleteTask);
