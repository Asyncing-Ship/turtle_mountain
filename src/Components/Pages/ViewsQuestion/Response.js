import React, { Component } from "react";
import { Input, Button } from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";
import { connect } from "react-redux";
const NewQuestion = (props) => {
  return (
    <div>
      {props.question.user.first_name} {props.question.user.last_name} :{" "}
      {props.question.content}
    </div>
  );
};
export default connect()(NewQuestion);
