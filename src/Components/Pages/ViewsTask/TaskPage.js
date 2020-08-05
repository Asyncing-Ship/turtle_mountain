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
import "./TaskPage.css";

class TaskPage extends Component {
  state = {
    selectedTask: 0,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }

  render() {
    return (
      <Router>
        <Accordion className="accordion">
          {this.props.tasks.map((x, i) => (
            <AccordionItem key={i}>
              <AccordionHeader className="accordion-head">
                {x.title}
              </AccordionHeader>
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
