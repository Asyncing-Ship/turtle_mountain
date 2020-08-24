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

class RecentQuestions extends Component {
  state = {
    index: -1,
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
  resetIndex = () => {
    this.setState({ index: -1 });
  };
  render() {
    return (
      <>
        <h3>Most Recently Asked Questions</h3>
        <h4>
          These are the questions that were most recently asked. whether
          answered or not, they will appear here
        </h4>
        <Accordion
          my={3}
          className="accordion"
          allowToggle
          index={this.state.index}
        >
          {this.props.questions.map((x, i) => (
            <AccordionItem
              className="accordion-item"
              key={i}
              defaultIsOpen="False"
              onClick={() => {
                this.setState({ index: i });
              }}
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
                    <QuestionObj x={x} resetIndex={this.resetIndex} />
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
    user: state.user,
    questions: state.questions.questions,
    response: state.questions.questionsResponse,
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(RecentQuestions);
