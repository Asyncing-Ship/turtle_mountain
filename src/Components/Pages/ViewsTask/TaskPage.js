// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
// Chakra UI Imports:
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
} from "@chakra-ui/core";
// React Router DOM Imports:
import {
  withRouter,
  HashRouter as Router,
  Link,
  Route,
} from "react-router-dom";
// Components Imports:
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import "./TaskPage.css";
import CompleteTask from "./CompleteTask";

// ----- This is the TaskPage component -----
// This component is tha main page component for tasks that displays the task for the users.
export class TaskPage extends Component {
  // Local State:
  state = {
    selectedTask: 1,
    searchString: "",
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }

  // Render function:
  render() {
    return (
      <Router>
        {/* 2 Buttons to filter task by status and assignment. the first 2 buttons will clear the search strings */}
        <Button
          m={3}
          onClick={() => this.setState({ selectedTask: 1, searchString: "" })}
        >
          Open Tasks
        </Button>
        <Button
          m={3}
          onClick={() => this.setState({ selectedTask: 2, searchString: "" })}
        >
          My Tasks
        </Button>
        {/* The input will be used to filter the tasks by matching results. it should do this without a button */}
        <Input
          m={3}
          value={this.state.searchString}
          onChange={(event) =>
            this.setState({ selectedTask: 3, searchString: event.target.value })
          }
        />
        {/* the first button will give us this result,
         after filtering by open tasks, we map each task to an accordion item with the title being the task title. 
         then feed each task into its own acceptTask component*/}
        {this.state.selectedTask === 1 && (
          <Accordion allowMultiple>
            {this.props.tasks
              .filter((x) => x.status === "open")
              .map((x) => (
                <AccordionItem defaultIsOpen="False">
                  {({ isExpanded }) => (
                    <>
                      <AccordionHeader
                        _expanded={{ bg: "#c79e61", color: "white" }}
                        _hover={{ bg: "#c79e61", color: "white" }}
                      >
                        <Box flex="1" textAlign="left">
                          {x.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionHeader>
                      <AccordionPanel pb={4}>
                        <AcceptTask task={x} />
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
          </Accordion>
        )}
        {/* the second button will give us this result,
         after filtering by tasks, assigned to the current user,
          we map each task to an accordion item with the title being the task title. 
         then feed each task into its own completeTask component*/}
        {this.state.selectedTask === 2 && (
          <Accordion allowMultiple>
            {this.props.tasks
              .filter((x) => {
                console.log(x.assigned_to, this.props.user.id);
                return x.assigned_to === this.props.user.id;
              })
              .map((x) => (
                <AccordionItem defaultIsOpen="False">
                  {({ isExpanded }) => (
                    <>
                      <AccordionHeader
                        _expanded={{ bg: "#c79e61", color: "white" }}
                        _hover={{ bg: "#c79e61", color: "white" }}
                      >
                        <Box flex="1" textAlign="left">
                          {x.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionHeader>
                      <AccordionPanel className="apanel" pb={4}>
                        <CompleteTask task={x} />
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
          </Accordion>
        )}
        {/* the input will give us this result,
         after filtering search string, we map 
         each task to an accordion item with the
          title being the task title. and the body being the content, 
          followed by the status of the task*/}
        {this.state.selectedTask === 3 && (
          <Accordion allowMultiple>
            {this.props.tasks
              .filter(
                (x) =>
                  x.title.includes(this.state.searchString) ||
                  x.content.includes(this.state.searchString) ||
                  x.first_name.includes(this.state.searchString) ||
                  x.last_name.includes(this.state.searchString)
              )
              .map((x) => (
                <AccordionItem defaultIsOpen="False">
                  {({ isExpanded }) => (
                    <>
                      <AccordionHeader
                        _expanded={{ bg: "#c79e61", color: "white" }}
                        _hover={{ bg: "#c79e61", color: "white" }}
                      >
                        <Box flex="1" textAlign="left">
                          {x.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionHeader>
                      <AccordionPanel pb={4}>
                        <AcceptTask task={x} />
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
          </Accordion>
        )}
        {/* a button that links to the new tasks page */}
        <Link to="/tasks/newTask">
          <Button>New Task</Button>
        </Link>
      </Router>
    );
  }
}
// ----- End of TaskPage component -----

// ----- Start of mapStateToProps function -----
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    user: state.user,
  };
};
// ----- End of mapStateToProps function -----

// ----- Default export of TaskPage component with router connection, Redux connection that maps to props.

export default withRouter(connect(mapStateToProps)(TaskPage));
