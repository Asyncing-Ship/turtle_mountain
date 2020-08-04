import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@chakra-ui/core";
import {
  withRouter,
  HashRouter as Router,
  Link,
  Route,
} from "react-router-dom";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
export class TaskPage extends Component {
  componentDidMount() {
    //this.props.dispatch({ type: "FETCH_TASKS" });
  }
  render() {
    return (
      <Router>
        <Route exact path="/tasks/newTask">
          <NewTask />
        </Route>
        {this.props.tasks &&
          this.props.tasks.map((x) => (
            <Route exact path={`tasks/acceptTask/${x.id}`}>
              <AcceptTask task={x} />
            </Route>
          ))}
        <Route exact path="/tasks">
          <Link to="/tasks/newTask">
            <Button>New Task</Button>
          </Link>
          <br />
          {this.props.tasks ? (
            this.props.tasks.map((x) => (
              <Button
                onClick={() => {
                  this.props.history.push(`/tasks/acceptTask/${x.id}`);
                }}
                key={x.id}
              >
                {x.title}
                <div className="btn-text">{x.status}</div>
              </Button>
            ))
          ) : (
            <div>No Tasks to Display</div>
          )}
        </Route>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user: state.user,
  };
};
export default withRouter(connect(mapStateToProps)(TaskPage));
