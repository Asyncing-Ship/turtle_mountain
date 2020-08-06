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
class QuestionPage extends Component {
  state = {
    filter: 1,
    searchText: "",
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_QUESTIONS" });
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({
              filter: 1,
              searchText: "",
            });
          }}
        ></Button>
        <Button
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
          <Accordion>
            {this.props.questions.map((x) => (
              <AccordionItem>
                <AccordionHeader className="accordionHead">
                  {x.title}
                </AccordionHeader>
                <AccordionPanel>
                  {x.content}
                  <AnswerQuestion />
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        )}
        {this.state.filter === 2 && (
          <Accordion>
            {this.props.questions
              .filter((x) => !x.is_answered)
              .map((x) => (
                <AccordionItem>
                  <AccordionHeader className="accordionHead">
                    {x.title}
                  </AccordionHeader>
                  <AccordionPanel>
                    {x.content}
                    <AnswerQuestion />
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        )}
        {this.state.filter === 3 && (
          <Accordion>
            {this.props.questions
              .filter(
                (x) =>
                  x.content.includes(this.state.searchText) ||
                  x.title.includes(this.state.searchText)
              )
              .map((x) => (
                <AccordionItem>
                  <AccordionHeader className="accordionHead">
                    {x.title}
                  </AccordionHeader>
                  <AccordionPanel>
                    {x.content}
                    <AnswerQuestion />
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        )}
        <Link to="/questions/newquestion">
          <Button>New Question</Button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions || [],
  };
};
export default connect(mapStateToProps)(QuestionPage);
