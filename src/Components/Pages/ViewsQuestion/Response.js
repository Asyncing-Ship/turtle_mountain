import React, { Component } from "react";
import { Input, Button } from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";
import { connect } from "react-redux";
const NewQuestion = (props) => {
  return (
    <div>
      <div>{props.content}</div>
    </div>
  );
};
export default connect()(NewQuestion);