import React, { Component } from "react";
import { Box, Button, Icon } from "@chakra-ui/core";
import { connect } from "react-redux";

const Approved = (props) => {
  return (
    <Box>
      <Box as="span" verticalAlign="top" ml={3}>
        {props.user.first_name} {props.user.last_name}
      </Box>
      {!props.user.is_admin && (
        <Box as="span" verticalAlign="top" ml={3}>
          <Button
            onClick={() => {
              props.dispatch({
                type: "PROMOTE_USER",
                payload: props.user.id,
              });
            }}
          >
            <Icon name="edit" size="16px" />
          </Button>
        </Box>
      )}
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

export default connect()(Approved);
