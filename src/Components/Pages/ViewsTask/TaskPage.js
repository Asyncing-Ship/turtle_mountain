// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
// Chakra UI Imports:
import { Button, Stack, ButtonGroup, Box } from "@chakra-ui/core";
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
import TaskEditView from "./TaskEditView";
// CSS Import:
import "./TaskPage.css";

// ----- This is the TaskPage component -----
// This component is tha main page component for tasks that displays the task for the users.
export class TaskPage extends Component {
  render() {
    return (
      <RouterB>
        <Stack className="tasks-content">
          <ButtonGroup className="tasks-btngrp">
            <NavLink activeClassName="tasks-nav-active" to="/tasks/open">
              <Button
                variant="outline"
                variantColor="blue"
                rightIcon="info"
                m={3}
              >
                Open Tasks
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/tasks/my">
              <Button
                variant="outline"
                variantColor="yellow"
                rightIcon="star"
                m={3}
              >
                My Tasks
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/tasks/search">
              <Button
                variant="outline"
                variantColor="purple"
                rightIcon="search"
                m={3}
              >
                Search
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/tasks/new">
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
          <Box className="tasks-routes">
            <Redirect from="/tasks" to="/tasks/open" />
            <Switch>
              <ProtectedRoute exact path="/tasks/open" component={OpenTask} />
              <ProtectedRoute exact path="/tasks/my" component={MyTask} />
              <ProtectedRoute
                exact
                path="/tasks/search"
                component={SearchTask}
              />
              <ProtectedRoute exact path="/tasks/new" component={NewTask} />
              <ProtectedRoute
                exact
                path="/tasks/edit"
                component={TaskEditView}
              />
            </Switch>
          </Box>
        </Stack>
        {/*  */}
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
