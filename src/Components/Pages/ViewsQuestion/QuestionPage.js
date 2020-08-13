// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import {
  HashRouter as RouterC,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
// Chakra-ui imports:
import {
  Button,
  Stack,
  ButtonGroup,
} from "@chakra-ui/core";
// Components Imports:
import ProtectedRoute from "../../Utilities/ProtectedRoute/ProtectedRoute";
import RecentQuestions from "./RecentQuestions";
import UnansweredQuestions from "./UnansweredQuestions";
import SearchQuestions from "./SearchQuestions";
import NewQuestion from "./NewQuestion";
// ----- End of imports -----

class QuestionPage extends Component {
  state = {
    filter: 1,
    searchText: "",
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_QUESTIONS" });
  }
  setQuestion = (id) => {
    this.props.dispatch({
      type: "FETCH_QUESTION_RESPONSES",
      payload: { question_id: id },
    });
  };
  render() {
    return (
      <RouterC>
        <Stack className="tasks-content">
          <ButtonGroup className="tasks-btngrp">
            <NavLink activeClassName="tasks-nav-active" to="/recent">
              <Button
                variant="outline"
                variantColor="blue"
                rightIcon="time"
                m={3}
              >
                Most Recent
              </Button>
            </NavLink>
            <NavLink
              activeClassName="tasks-nav-active"
              to="/unanswered"
            >
              <Button
                variant="outline"
                variantColor="yellow"
                rightIcon="question"
                m={3}
              >
                Unanswered
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
                New Question
              </Button>
            </NavLink>
          </ButtonGroup>
          <Redirect from="/" to="/recent" />
          <Switch>
            <ProtectedRoute
              exact
              path="/recent"
              component={RecentQuestions}
            />
            <ProtectedRoute
              exact
              path="/unanswered"
              component={UnansweredQuestions}
            />
            <ProtectedRoute
              exact
              path="/search"
              component={SearchQuestions}
            />
            <ProtectedRoute
              exact
              path="/new"
              component={NewQuestion}
            />
          </Switch>
        </Stack>
      </RouterC>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions || [],
    response: state.questions.questionsResponse || [
      Math.random(),
      Math.random(),
    ],
  };
};
export default connect(mapStateToProps)(QuestionPage);
