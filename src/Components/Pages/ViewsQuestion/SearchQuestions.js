// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Imports:
import { connect } from "react-redux";
// Chakra-ui imports:
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/core";
// Components Imports:
import QuestionBadge from "./QuestionBadge";
import QuestionObj from "./QuestionObj";
// ----- End of imports -----

class SearchTask extends Component {
  state = {
    searchString: "",
    index: -1,
  };

  setQuestion = (id) => {
    //get the responses for the selected question
    this.props.dispatch({
      type: "FETCH_QUESTION_RESPONSES",
      payload: { question_id: id },
    });
  };
  resetIndex = () => {
    this.setState({ index: -1 });
  };
  componentDidMount() {
    //get questions from the server when we switch to this page
    this.props.dispatch({ type: "FETCH_QUESTIONS" });
  }

  render() {
    return (
      <>
        <h3>This page contains an archive of all questions</h3>
        <small>to find a question, start searching for it</small>
        {/* The input will be used to filter the tasks by matching results. it should do this without a button */}
        <InputGroup my={3} w="100%">
          <InputLeftElement
            children={<Icon name="search" color="gray.400" />}
          />
          <Input
            className="tasks-search"
            value={this.state.searchString}
            onChange={(event) => {
              this.setState({ searchString: event.target.value, index: -1 });
            }}
            variant="filled"
            placeholder="Search"
          />
        </InputGroup>
        {/* the input will give us this result,
            after filtering search string, we map 
            each task to an accordion item with the
            title being the task title. and the body being the content, 
            followed by the status of the task*/}
        <Accordion
          my={3}
          className="accordion"
          allowToggle
          index={this.state.index}
        >
          {this.props.questions
            .filter(
              (x) =>
                x.title.includes(this.state.searchString) ||
                x.content.includes(this.state.searchString)
            )
            .map((x, i) => (
              <AccordionItem
                className="accordion-item"
                key={i}
                defaultIsOpen="False"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionHeader
                      onClick={() => {
                        //change the current question (to get its responses), set the index to the clicked accordion item, so it opens
                        this.setQuestion(x.id);
                        this.setState({ index: i });
                      }}
                      className="accordion-head"
                      _expanded={{ bg: "#c79e61", color: "white" }}
                      _hover={{ bg: "#c79e61", color: "white" }}
                    >
                      <Box flex="2" textAlign="left">
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
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(SearchTask);
