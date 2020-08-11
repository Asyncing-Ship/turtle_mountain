// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
// Chakra UI Imports:
import { Button, Stack, ButtonGroup } from "@chakra-ui/core";
// React Router DOM Imports:
import {
  withRouter,
  HashRouter as RouterB,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
// Components Imports:
import ProtectedRoute from "../../Utilities/ProtectedRoute/ProtectedRoute";
import OpenTask from "./OpenTask";
import MyTask from "./MyTask";
import SearchTask from "./SearchTask";
import NewTask from "./NewTask";
// CSS Import:
import "./TaskPage.css";

// ----- This is the TaskPage component -----
// This component is tha main page component for tasks that displays the task for the users.
export class TaskPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_ALL_USERS" });
  }
  render() {
    return (
      <RouterB>
        <Stack className="tasks-content">
          <ButtonGroup className="tasks-btngrp">
            <NavLink activeClassName="tasks-nav-active" to="/open">
              <Button
                variant="outline"
                variantColor="blue"
                rightIcon="info"
                m={3}
              >
                Open Tasks
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/my">
              <Button
                variant="outline"
                variantColor="yellow"
                rightIcon="star"
                m={3}
              >
                My Tasks
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/search">
              <Button
                variant="outline"
                variantColor="purple"
                rightIcon="search"
                m={3}
              >
                Search
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/new">
              <Button
                variant="outline"
                variantColor="green"
                rightIcon="add"
                m={3}
              >
                New Task
              </Button>
            </NavLink>
          </ButtonGroup>

          <Redirect from="/" to="/open" />
          <Switch>
            <ProtectedRoute exact path="/open" component={OpenTask} />
            <ProtectedRoute exact path="/my" component={MyTask} />
            <ProtectedRoute exact path="/search" component={SearchTask} />
            <ProtectedRoute exact path="/new" component={NewTask} />
          </Switch>
        </Stack>
      </RouterB>
    );
  }
}
// ----- End of TaskPage component -----

// ----- Start of mapStateToProps function -----
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    user: state.user,
    users: state.users,
  };
};
// ----- End of mapStateToProps function -----

// ----- Default export of TaskPage component with router connection, Redux connection that maps to props.
export default withRouter(connect(mapStateToProps)(TaskPage));
