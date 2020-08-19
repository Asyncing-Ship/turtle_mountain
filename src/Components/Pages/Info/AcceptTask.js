import React, { Fragment } from "react";
import {
  Button,
  Box,
  Tag,
  TagIcon,
  TagLabel,
  ButtonGroup,
  Input,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import moment from "moment";
import Swal from "sweetalert2";
class AcceptTask extends React.Component {
  state = {
    accepted: false,
    completed: false,
    task: { first_name: "Avg", last_name: "Joe", content: this.props.content },
    tagged_users: [
      { is_admin: true, first_name: "ex", last_name: "ample" },
      { is_admin: false, first_name: "non", last_name: "admin" },
    ],
  };
  render() {
    return (
      <>
        <h3>{this.state.task.content}</h3>

        <Box flex="1" textAlign="left">
          <small>
            <i>
              Posted at:{" "}
              {moment(this.state.task.date_posted).format("MM/DD/YY LT")} (By{" "}
              <u>
                {this.state.task.first_name} {this.state.task.last_name}
              </u>
              )
            </i>
          </small>
        </Box>
        <Box my={3}>
          {this.state.tagged_users.map((x, i) => (
            <Fragment key={i}>
              {x.is_admin ? (
                <Tag rounded="full" size="sm" variantColor="purple" mr={2}>
                  <TagIcon icon="star" size="10px" />
                  <TagLabel>
                    {x.first_name} {x.last_name}
                  </TagLabel>
                </Tag>
              ) : (
                <Tag rounded="full" size="sm" variantColor="yellow" mr={2}>
                  <TagLabel>
                    {x.first_name} {x.last_name}
                  </TagLabel>
                </Tag>
              )}
            </Fragment>
          ))}
        </Box>
        <Box textAlign="right" borderTop="1px solid #f5fffe" pt={3} mt={3}>
          {this.state.accepted === false ? (
            <ButtonGroup>
              <Button
                size="sm"
                rightIcon="check"
                variantColor="green"
                className="new_class_goes_here"
                onClick={async () => {
                  this.setState({ accepted: true });
                  Swal.fire({
                    title: "Accepting a task",
                    text:
                      "When you click this button, it will mark the corresponding task as your task.\n Only one user can accept a task, and the task will be removed from the 'open tasks' section once accepted. the task will then appear in the 'my tasks' section, where it can either send a notification to the person who posted the task, or it can be marked as complete",

                    icon: "info",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK!",
                  });
                }}
              >
                Accept Task
              </Button>
            </ButtonGroup>
          ) : (
            this.state.completed == false && (
              <Box textAlign="right">
                <Input
                  rounded="md"
                  size="sm"
                  mt={3}
                  placeholder="Enter your response..."
                />
                <Button
                  size="sm"
                  rightIcon="bell"
                  variantColor="yellow"
                  mt={3}
                  ml={3}
                  onClick={async () => {
                    Swal.fire({
                      title: "Sending a response",
                      text:
                        "When you click this button, it will send a notification to the person who first posted the task. the notification will contain your name, the title of the task, and your message.",

                      icon: "info",
                      confirmButtonColor: "#3085d6",
                      confirmButtonText: "OK!",
                    });
                  }}
                >
                  Send Response
                </Button>
                <Button
                  size="sm"
                  rightIcon="check"
                  variantColor="green"
                  mt={3}
                  ml={3}
                  onClick={() => {
                    this.setState({ completed: true });
                    Swal.fire({
                      title: "Completing a task",
                      text:
                        "When you click this button, it will mark the corresponding task as completed.",

                      icon: "info",
                      confirmButtonColor: "#3085d6",
                      confirmButtonText: "OK!",
                    });
                  }}
                >
                  Complete Task
                </Button>
              </Box>
            )
          )}
        </Box>
      </>
    );
  }
}

export default AcceptTask;
