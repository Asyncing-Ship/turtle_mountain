import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/core";
import TaskBadge from "./TaskBadge";
import AcceptTask from "./TaskButtons/AcceptTask";
import { connect } from "react-redux";

class OpenTask extends Component {
  state = {
    index: -1,
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }

  render() {
    return (
      <>
        <h2>These tasks need to be accepted</h2>
        <small>to see details, click on the task to expand it</small>
        <Accordion m={3} className="accordion" allowToggle defaultIndex={[-1]}>
          {!this.props.tasks.filter((x) => x.status === "open")[0] && (
            <h2>
              <b>-no tasks to display-</b>
            </h2>
          )}
          {this.props.tasks
            .filter((x) => x.status === "open")
            .map((x, i) => (
              <AccordionItem
                className="accordion-item"
                key={i}
                defaultIsOpen="False"
                onClick={() =>
                  this.props.dispatch({
                    type: "SET_TASK_DETAIL",
                    payload: {
                      taskDetail: x,
                    },
                  })
                }
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionHeader
                      className="accordion-head"
                      _expanded={{ bg: "#c79e61", color: "white" }}
                      _hover={{ bg: "#c79e61", color: "white" }}
                      onClick={() => {
                        this.props.dispatch({
                          type: "FETCH_TASK_TAGS",
                          payload: { task_id: x.id },
                        });
                        this.setState({ index: i });
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        {x.title}
                      </Box>
                      <TaskBadge x={x} />
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel className="apanel" pb={4}>
                      <AcceptTask task={x} />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
        </Accordion>
      </>
    );
  }
}

// ----- Start of mapStateToProps function -----
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(OpenTask);
