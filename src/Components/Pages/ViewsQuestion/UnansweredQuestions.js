// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
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
import QuestionBadge from "./QuestionBadge";
import QuestionObj from "./QuestionObj";
// ----- End of imports -----

class UnansweredQuestions extends Component {
  componentWillMount() {
    //get questions from the server when we switch to this page
    this.props.dispatch({ type: "FETCH_QUESTIONS" });
  }

  setQuestion = (id) => {
    //get the responses for the selected question
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
          {console.log(this.props.questions)}
          {this.props.questions
            .filter((x) => !x.is_verified)
            .map((x, i) => (
              // Only 1 Item can be displayed at a time, and default to closed
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
                      {/* the Accordion body contains our Question Object. */}
                      <QuestionObj x={x} />
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
