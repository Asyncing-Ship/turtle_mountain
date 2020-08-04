import React, { Component } from "react";
import { Input, Button } from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";
class NewTask extends Component {
  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input placeholder="Title" />
        <Textarea placeholder="Detailed Description" />
        <Textarea placeholder="Directions (if applicable)" />
        <Button type="submit">Add Task</Button>
      </form>
    );
  }
}

export default NewTask;
