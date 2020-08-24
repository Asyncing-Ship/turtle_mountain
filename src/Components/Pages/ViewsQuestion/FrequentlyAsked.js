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
  state = {
    index: -1,
  };
  componentWillMount() {
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
        <h3>These Are the most frequently asked questions</h3>
        {/* I think there is a filter bug in here. I did not change it. When you answer it still appears. The original code was like that as well. - Jake */}
        <Accordion
          my={3}
          className="accordion"
          allowToggle
          index={[this.state.index]}
        >
          {console.log(this.props.questions)}
          {this.props.questions
            .filter((x) => x.is_frequent)
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
                      onClick={() => {
                        this.setQuestion(x.id);
                        this.setState({ index: i });
                      }}
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
    questions: state.questions.questions,
    response: state.questions.questionsResponse,
    user: state.user,
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(UnansweredQuestions);
