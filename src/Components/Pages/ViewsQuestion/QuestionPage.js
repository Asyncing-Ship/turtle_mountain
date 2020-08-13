// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import {
  withRouter,
  HashRouter as RouterC,
  Switch,
  Redirect,
  NavLink,
  Link,
} from "react-router-dom";
// Chakra-ui imports:
import {
  Input,
  Button,
  Stack,
  ButtonGroup,
  Accordion,
  AccordionHeader,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/core";
// Components Imports:
import ProtectedRoute from "../../Utilities/ProtectedRoute/ProtectedRoute";
import RecentQuestions from "./RecentQuestions";
import UnansweredQuestions from "./UnansweredQuestions";
import SearchQuestions from "./SearchQuestions";
import NewQuestion from "./NewQuestion";
import AnswerQuestion from "./AnswerQuestion";
import Response from "./Response";
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
            <NavLink activeClassName="tasks-nav-active" to="/recent-questions">
              <Button
                variant="outline"
                variantColor="blue"
                rightIcon="info"
                m={3}
              >
                Most Recent
              </Button>
            </NavLink>
            <NavLink
              activeClassName="tasks-nav-active"
              to="/unanswered-questions"
            >
              <Button
                variant="outline"
                variantColor="yellow"
                rightIcon="star"
                m={3}
              >
                Unanswered
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/search-questions">
              <Button
                variant="outline"
                variantColor="purple"
                rightIcon="search"
                m={3}
              >
                Search
              </Button>
            </NavLink>
            <NavLink activeClassName="tasks-nav-active" to="/new-question">
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
          <Redirect from="/" to="/recent-questions" />
          <Switch>
            <ProtectedRoute
              exact
              path="/recent-questions"
              component={RecentQuestions}
            />
            <ProtectedRoute
              exact
              path="/unanswered-questions"
              component={UnansweredQuestions}
            />
            <ProtectedRoute
              exact
              path="/search-questions"
              component={SearchQuestions}
            />
            <ProtectedRoute
              exact
              path="/new-question"
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
