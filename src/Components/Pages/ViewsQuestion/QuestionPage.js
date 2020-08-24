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
import { Button, Stack, ButtonGroup, Box } from "@chakra-ui/core";
// Components Imports:
import ProtectedRoute from "../../Utilities/ProtectedRoute/ProtectedRoute";
import RecentQuestions from "./RecentQuestions";
import UnansweredQuestions from "./UnansweredQuestions";
import SearchQuestions from "./SearchQuestions";
import NewQuestion from "./NewQuestion";
// CSS Import:
import "./QuestionPage.css";
import FrequentlyAsked from "./FrequentlyAsked";
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
        <Stack className="questions-content">
          <ButtonGroup className="questions-btngrp">
            <NavLink activeClassName="questions-nav-active" to="/questions/FAQ">
              <Button
                variant="outline"
                variantColor="orange"
                rightIcon="question-outline"
                m={3}
              >
                Most Frequent
              </Button>
            </NavLink>
            <NavLink
              activeClassName="questions-nav-active"
              to="/questions/recent"
            >
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
              activeClassName="questions-nav-active"
              to="/questions/unanswered"
            >
              <Button
                variant="outline"
                variantColor="yellow"
                rightIcon="not-allowed"
                m={3}
              >
                Unanswered
              </Button>
            </NavLink>
            <NavLink
              activeClassName="questions-nav-active"
              to="/questions/search"
            >
              <Button
                variant="outline"
                variantColor="purple"
                rightIcon="search"
                m={3}
              >
                Search
              </Button>
            </NavLink>
            <NavLink activeClassName="questions-nav-active" to="/questions/new">
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
          <Box className="questions-routes">
            <Redirect from="/questions" to="/questions/FAQ" />
            <Switch>
              <ProtectedRoute
                exact
                path="/questions/FAQ"
                component={FrequentlyAsked}
              />
              <ProtectedRoute
                exact
                path="/questions/recent"
                component={RecentQuestions}
              />
              <ProtectedRoute
                exact
                path="/questions/unanswered"
                component={UnansweredQuestions}
              />
              <ProtectedRoute
                exact
                path="/questions/search"
                component={SearchQuestions}
              />
              <ProtectedRoute
                exact
                path="/questions/new"
                component={NewQuestion}
              />
            </Switch>
          </Box>
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
