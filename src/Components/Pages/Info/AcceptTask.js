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
import moment from "moment";
class AcceptTask extends React.Component {
  state = {
    accepted: false,
    task: { first_name: "Avg", last_name: "Joe", content: "f" },
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
          <ButtonGroup>
            <Button
              size="sm"
              rightIcon="check"
              variantColor="green"
              className="new_class_goes_here"
              onClick={async () => {
                this.setState({ accepted: true });
              }}
            >
              Accept Task
            </Button>
          </ButtonGroup>
        </Box>
      </>
    );
  }
}

export default AcceptTask;
