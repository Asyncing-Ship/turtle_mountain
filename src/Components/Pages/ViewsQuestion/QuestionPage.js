// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import {
  withRouter,
  HashRouter as RouterB,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
// Chakra-ui imports:
import {
  Input,
  Button, Stack, ButtonGroup,
  Accordion,
  AccordionHeader,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/core";
// Components Imports:
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
      <>
        <RouterC>
          <Stack className="tasks-content">
            <ButtonGroup className="tasks-btngrp">
              <NavLink
                activeClassName="tasks-nav-active"
                to="/recent-questions"
              >
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
              <NavLink
                activeClassName="tasks-nav-active"
                to="/search-questions"
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
              <NavLink activeClassName="tasks-nav-active" to="/new-questions">
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
              <ProtectedRoute exact path="/new-questions" component={NewQuestions} />
            </Switch>
          </Stack>
        </RouterC>
        {/* ---------------------------------------- */}
        {/* Start of buttons */}
        <div>
          {/* Start of buttons */}
          <Button
            m={3}
            onClick={() => {
              this.setState({
                filter: 1,
                searchText: "",
              });
            }}
          >
            Most Recent
          </Button>
          <Button
            m={3}
            onClick={() => {
              this.setState({
                filter: 2,
                searchText: "",
              });
            }}
          >
            Unanswered
          </Button>
          {/* End of buttons */}
          {/* Start of search input */}
          <Input
            m={3}
            placeholder="Search For a Question"
            onClick={() => {
              this.setState({
                filter: 3,
              });
            }}
            onChange={(event) => {
              this.setState({ searchText: event.target.value });
            }}
          />
          {/* End of search input */}
          {/* Start of Accordions Examples */}
          {/* Start of Question area 1 */}
          {this.state.filter === 1 && (
            <Accordion defaultIndex={[-1]} allowToggle>
              {this.props.questions.map((x) => (
                <AccordionItem defaultIsOpen="False">
                  <AccordionHeader
                    className="accordionHead"
                    onClick={() => this.setQuestion(x.id)}
                  >
                    {x.title}
                  </AccordionHeader>
                  <AccordionPanel>
                    {x.content}
                    <br />
                    <br />
                    <h3>Responses</h3>
                    <br />
                    {this.props.response[0] &&
                      this.props.response.map((x) => <Response question={x} />)}
                    <AnswerQuestion question={x} />
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          )}
          {/* End of Question area 1 */}
          {/* Start of Question area 2 */}
          {this.state.filter === 2 && (
            <Accordion defaultIndex={[-1]} allowToggle>
              {this.props.questions
                .filter((x) => !x.is_answered)
                .map((x) => (
                  <AccordionItem defaultIsOpen="False">
                    <AccordionHeader
                      className="accordionHead"
                      onClick={() => this.setQuestion(x.id)}
                    >
                      {x.title}
                    </AccordionHeader>
                    <AccordionPanel>
                      {x.content}
                      <br />
                      <br />
                      <h3>Responses</h3>
                      <br />
                      {this.props.response.map((x) => (
                        <Response question={x} />
                      ))}
                      <AnswerQuestion question={x} />
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          )}
          {/* End of Question area 2 */}
          {/* Start of Question area 3 */}
          {this.state.filter === 3 && (
            <Accordion defaultIndex={[-1]} allowToggle>
              {this.props.questions
                .filter(
                  (x) =>
                    x.content.includes(this.state.searchText) ||
                    x.title.includes(this.state.searchText)
                )
                .map((x) => (
                  <AccordionItem defaultIsOpen="False">
                    <AccordionHeader
                      className="accordionHead"
                      onClick={() => this.setQuestion(x.id)}
                    >
                      {x.title}
                    </AccordionHeader>
                    <AccordionPanel>
                      {x.content}
                      <br />
                      <br />
                      <h3>Responses</h3>
                      <br />
                      {this.props.response.map((x) => (
                        <Response question={x} />
                      ))}
                      <AnswerQuestion />
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          )}
          {/* End of Question area 3 */}
          {/* Start of Accordions */}
          <Link to="/questions/new">
            <Button>New Question</Button>
          </Link>
        </div>
      </>
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
