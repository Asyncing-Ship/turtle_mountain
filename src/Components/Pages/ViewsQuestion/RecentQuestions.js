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

class RecentQuestions extends Component {
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
        <h3>Most Recently Asked Questions</h3>
        <h4>
          These are the questions that were most recently asked. whether
          answered or not, they will appear here
        </h4>
        <Accordion my={3} className="accordion" allowToggle defaultIndex={[-1]}>
          {this.props.questions.map((x, i) => (
            <AccordionItem
              className="accordion-item"
              key={i}
              defaultIsOpen="False"
            >
              {({ isExpanded }) => (
                <>
                  <AccordionHeader
                    className="accordion-head"
                    _expanded={{ bg: "#c79e61", color: "#f5fffe" }}
                    _hover={{ bg: "#c79e61", color: "#f5fffe" }}
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
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(RecentQuestions);
