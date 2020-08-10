import React, { Component } from "react";

import { Icon, Box, Button } from "@chakra-ui/core";
import { connect } from "react-redux";
const Incoming = (props) => {
  return (
    <Box>
      <Box as="span" verticalAlign="top" ml={3}>
        {props.user.first_name} {props.user.last_name}
      </Box>
      <Box as="span" verticalAlign="top" ml={3}>
        <Button
          onClick={() => {
            props.dispatch({
              type: "APPROVE_USER",
              payload: props.user.id,
            });
          }}
        >
          <Icon name="check" size="16px" />
        </Button>
      </Box>
      <Box as="span" verticalAlign="top" ml={3}>
        <Button
          onClick={() => {
            props.dispatch({
              type: "DELETE_USER",
              payload: props.user.id,
            });
          }}
        >
          <Icon name="close" size="16px" />
        </Button>
      </Box>
    </Box>
  );
};

export default connect()(Incoming);
