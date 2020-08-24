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
import moment from "moment";
import Swal from "sweetalert2";
class AcceptTask extends React.Component {
  state = {
    accepted: false,
    completed: false,
    task: { first_name: "Avg", last_name: "Joe", content: this.props.content },
    tagged_users: [
      { is_admin: true, first_name: "Paul", last_name: "Lepine" },
      { is_admin: false, first_name: "John", last_name: "Doe" },
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
                <Tag
                  rounded="full"
                  size="sm"
                  variantColor="purple"
                  mr={2}
                  onClick={() => {
                    Swal.fire({
                      title: "Administrative user tag",
                      text:
                        "Administrative users of the app will appear differently when tagged than regular users (Still in the 'first last' format). Their tag will be purple and have a star next to it.",

                      icon: "info",
                      confirmButtonColor: "#3085d6",
                      confirmButtonText: "OK!",
                    });
                  }}
                >
                  <TagIcon icon="star" size="10px" />
                  <TagLabel>
                    {x.first_name} {x.last_name}
                  </TagLabel>
                </Tag>
              ) : (
                <Tag
                  rounded="full"
                  size="sm"
                  variantColor="yellow"
                  mr={2}
                  onClick={() => {
                    Swal.fire({
                      title: "User tag",
                      text:
                        "Users who have been tagged in a task will appear like this in the format 'first last'. This is so people can easily find tasks that are intended for them specifically.",

                      icon: "info",
                      confirmButtonColor: "#3085d6",
                      confirmButtonText: "OK!",
                    });
                  }}
                >
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
                      "When you accept a task, it will no longer appear on the 'open tasks' board. it will be moved to the 'my tasks' page, where you can either mark it complete or send a notification to the person who posted the task",

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
            this.state.completed === false && (
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
