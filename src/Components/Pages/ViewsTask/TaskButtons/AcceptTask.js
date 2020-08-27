import React, { Fragment } from "react";
import {
  Button,
  Box,
  Tag,
  TagIcon,
  TagLabel,
  ButtonGroup,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import moment from "moment";
const AcceptTask = (props) => {
  //this should allow people to accept, edit,or delete a task
  if (props.task.user_id === props.user.id || props.user.is_admin) {
    return (
      <>
        <h3>{props.task.content}</h3>

        <Box flex="1" textAlign="left">
          <small>
            <i>
              Posted at: {moment(props.task.date_posted).format("MM/DD/YY LT")}{" "}
              (By{" "}
              <u>
                {props.task.first_name} {props.task.last_name}
              </u>
              )
            </i>
          </small>
        </Box>
        {props.tags[0] &&
          props.tags[0].tagged_users &&
          props.tags[0].tagged_users.map((x) => <span>@{x} </span>)}
        <Box my={3}>
          {props.tags.map((x, i) => (
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
          <ButtonGroup>
            <Button
              size="sm"
              rightIcon="check"
              variantColor="green"
              className="new_class_goes_here"
              onClick={async () => {
                await props.dispatch({
                  type: "ACCEPT_TASK",
                  payload: {
                    task_id: props.task.id,
                  },
                });
                await props.history.push("/tasks/my");
              }}
            >
              Accept Task
            </Button>
            <EditTask task={props.task} />
            <DeleteTask task={props.task} />
          </ButtonGroup>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <h3>{props.task.content}</h3>

        <Box textAlign="right">
          <Button
            ml={2}
            size="sm"
            rightIcon="check"
            variantColor="green"
            className="new_class_goes_here"
            onClick={async () => {
              await props.dispatch({
                type: "ACCEPT_TASK",
                payload: {
                  task_id: props.task.id,
                },
              });
              await props.dispatch({
                type: "ADD_NOTIFICATIONS",
                payload: {
                  type: "accepted a task you created",
                  preview: props.task.content,
                  first_name: props.user.first_name,
                  last_name: props.user.last_name,
                  is_admin: props.user.is_admin,
                },
              });
              await props.history.push("/my");
            }}
          >
            Accept Task
          </Button>
        </Box>
        {props.tags[0] &&
          props.tags[0].tagged_users &&
          props.tags[0].tagged_users.map((x) => <span>@{x} </span>)}
        <Box>
          {props.tags.map((x) => (
            <>
              {x.is_admin ? (
                <Tag rounded="full" size="sm" variantColor="purple" mr={2}>
                  <TagIcon icon="star" />
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
            </>
          ))}
        </Box>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user, tags: state.tasks.taskTags };
};

export default withRouter(connect(mapStateToProps)(AcceptTask));
