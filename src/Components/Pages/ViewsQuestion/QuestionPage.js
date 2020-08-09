import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Input,
  Button,
  Accordion,
  AccordionHeader,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import AnswerQuestion from "./AnswerQuestion";
import Response from "./Response";
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
      <div>
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
        {this.state.filter === 1 && (
          <Accordion defaultIndex={[-1]} allowToggle>
            {this.props.questions.map((x) => (
              <AccordionItem
                defaultIsOpen="False"
                onClick={() => this.setQuestion(x.id)}
              >
                <AccordionHeader className="accordionHead">
                  {x.title}
                </AccordionHeader>
                <AccordionPanel>
                  {this.props.response.map((x) => (
                    <Response content={x} />
                  ))}
                  {x.content}
                  <AnswerQuestion />
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        )}
        {this.state.filter === 2 && (
          <Accordion defaultIndex={[-1]} allowToggle>
            {this.props.questions
              .filter((x) => !x.is_answered)
              .map((x) => (
                <AccordionItem
                  defaultIsOpen="False"
                  onClick={() => this.setQuestion(x.id)}
                >
                  <AccordionHeader className="accordionHead">
                    {x.title}
                  </AccordionHeader>
                  <AccordionPanel>
                    {this.props.response.map((x) => (
                      <Response content={x} />
                    ))}
                    {x.content}
                    <AnswerQuestion />
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        )}
        {this.state.filter === 3 && (
          <Accordion defaultIndex={[-1]} allowToggle>
            {this.props.questions
              .filter(
                (x) =>
                  x.content.includes(this.state.searchText) ||
                  x.title.includes(this.state.searchText)
              )
              .map((x) => (
                <AccordionItem
                  defaultIsOpen="False"
                  onClick={() => this.setQuestion(x.id)}
                >
                  <AccordionHeader className="accordionHead">
                    {x.title}
                  </AccordionHeader>
                  <AccordionPanel>
                    {this.props.response.map((x) => (
                      <Response content={x} />
                    ))}
                    {x.content}
                    <AnswerQuestion />
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        )}
        <Link to="/questions/new">
          <Button>New Question</Button>
        </Link>
      </div>
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
