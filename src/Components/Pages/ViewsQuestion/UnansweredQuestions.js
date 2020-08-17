// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
import moment from "moment";
// React Redux Imports:
import { connect } from "react-redux";
import {
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionHeader,
  AccordionItem,
  Accordion,
} from "@chakra-ui/core";
// Components Imports:
import AnswerQuestion from "./AnswerQuestion";
import Response from "./Response";
import QuestionBadge from "./QuestionBadge";
// ----- End of imports -----

class UnansweredQuestions extends Component {
  componentWillMount() {
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
        <h3>
          These questions are unanswered, and ordered from newest to oldest
        </h3>

        {/* I think there is a filter bug in here. I did not change it. When you answer it still appears. The original code was like that as well. - Jake */}
        <Accordion my={3} className="accordion" allowToggle defaultIndex={[-1]}>
          {this.props.questions
            .filter((x) => !x.is_answered)
            .map((x, i) => (
              <AccordionItem
                className="accordion-item"
                key={i}
                defaultIsOpen="False"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionHeader
                      className="accordion-head"
                      _expanded={{ bg: "#c79e61", color: "white" }}
                      _hover={{ bg: "#c79e61", color: "white" }}
                      onClick={() => this.setQuestion(x.id)}
                    >
                      <Box flex="1" textAlign="left">
                        {x.title}
                      </Box>
                      <QuestionBadge x={x} />
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel
                      className="apanel"
                      wordBreak="break-word"
                      pb={4}
                    >
                      {x.content}
                      <Box flex="1" textAlign="left">
                        <small>
                          <i>
                            Posted at:{" "}
                            {moment(x.date_posted).format("MM/DD/YY LT")} (By{" "}
                            {x.user.first_name} {x.user.last_name})
                          </i>
                        </small>
                      </Box>
                      <Box m={3}>
                        <strong>Responses</strong>
                      </Box>
                      <Box textAlign="right" m={3}>
                        {/* This is the button and input field */}
                        <AnswerQuestion question={x} />
                      </Box>
                      <Box m={3}>
                        {this.props.response.map((y, j) => (
                          <Response
                            key={j}
                            response={y}
                            questionVerified={x.is_verified}
                            posted_by={x.userId}
                          />
                        ))}
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
        </Accordion>
      </>
    );
  }
}

// ----- Start of mapStateToProps function -----
const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions,
    response: state.questions.questionsResponse,
    user: state.user,
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(UnansweredQuestions);
