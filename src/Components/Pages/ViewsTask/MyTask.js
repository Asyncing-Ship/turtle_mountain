import React, { Component } from "react";
import CompleteTask from "./CompleteTask";
import {
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionHeader,
  AccordionItem,
  Accordion,
} from "@chakra-ui/core";
import TaskBadge from "./TaskBadge";
import { connect } from "react-redux";

class MyTask extends Component {
  state = {
    index: -1,
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }
  resetIndex = () => {
    this.setState({ index: -1 });
  };
  render() {
    return (
      <>
        <h2>These are the tasks assigned to you</h2>
        <small>
          To ask for clarification, type your response, then click the 'send
          response' button
        </small>
        {!this.props.tasks.filter(
          (x) => x.assigned_to === this.props.user.id
        )[0] && (
          <h2>
            <b>-no tasks to display-</b>
          </h2>
        )}
        {/* the second button will give us this result,
            after filtering by tasks, assigned to the current user,
            we map each task to an accordion item with the title being the task title. 
            then feed each task into its own completeTask component*/}
        <Accordion
          m={3}
          className="accordion"
          allowToggle
          index={this.state.index}
        >
          {this.props.tasks
            .filter((x) => {
              console.log(x.assigned_to, this.props.user.id);
              return x.assigned_to === this.props.user.id;
            })
            .map((x, i) => (
              <AccordionItem
                className="accordion-item"
                key={i}
                defaultIsOpen="False"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionHeader
                      className="accordion-head"
                      _expanded={{ bg: "#c79e61", color: "white" }}
                      _hover={{ bg: "#c79e61", color: "white" }}
                      onClick={() => this.setState({ index: i })}
                    >
                      <Box flex="1" textAlign="left">
                        {x.title}
                      </Box>
                      <TaskBadge x={x} />
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel className="apanel" pb={4}>
                      <CompleteTask task={x} resetIndex={this.resetIndex} />
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
    user: state.user,
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(MyTask);
