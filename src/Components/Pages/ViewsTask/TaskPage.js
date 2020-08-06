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
        <Input
          m={3}
          value={this.state.searchString}
          onChange={(event) =>
            this.setState({ selectedTask: 3, searchString: event.target.value })
          }
        />
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
        {this.state.selectedTask === 3 && (
          <Accordion allowMultiple>
            {this.props.tasks
              .filter(
                (x) =>
                  x.title.includes(this.state.searchString) ||
                  x.content.includes(this.state.searchString)
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
