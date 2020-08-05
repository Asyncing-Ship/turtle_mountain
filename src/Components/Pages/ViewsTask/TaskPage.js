import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Accordion,
  AccordionHeader,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/core";
import {
  withRouter,
  HashRouter as Router,
  Link,
  Route,
} from "react-router-dom";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
export class TaskPage extends Component {
  state = {
    selectedTask: 0,
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }
  render() {
    return (
      <Router>
        <Accordion>
          {this.props.tasks.map((x) => (
            <AccordionItem>
              <AccordionHeader>{x.title}</AccordionHeader>
              <AccordionPanel>
                <AcceptTask task={x} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Link to="/tasks/newTask">
          <Button>New Task</Button>
        </Link>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    user: state.user,
  };
};
export default withRouter(connect(mapStateToProps)(TaskPage));
