// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
import CompleteTask from "../ViewsTask/CompleteTask";
import {
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionHeader,
  AccordionItem,
  Accordion,
  Heading,
} from "@chakra-ui/core";
import TaskBadge from "../ViewsTask/TaskBadge";
// Components Imports:
import AnswerQuestion from "./AnswerQuestion";
import Response from "./Response";
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
        <Accordion m={3} className="accordion" allowToggle defaultIndex={[-1]}>
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
                    _expanded={{ bg: "#c79e61", color: "white" }}
                    _hover={{ bg: "#c79e61", color: "white" }}
                    onClick={() => this.setQuestion(x.id)}
                  >
                    <Box flex="1" textAlign="left">
                      {x.title}
                    </Box>
                    <TaskBadge x={x} />
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel>
                    {x.content}
                    <Box m={3}>
                      <Heading as="h3">Responses</Heading>
                    </Box>
                    <Box m={3}>
                      {this.props.response.map((y) => (
                        <Response
                          question={y}
                          questionVerified={x.is_answered}
                          posted_by={x.userId}
                        />
                      ))}
                    </Box>
                    <Box m={3}>
                      {/* This is the button and input field */}
                      <AnswerQuestion question={x} />
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
