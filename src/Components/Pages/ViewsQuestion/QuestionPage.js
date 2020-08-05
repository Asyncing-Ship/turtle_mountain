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
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_QUESTIONS" });
  }
  render() {
    return (
      <div>
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
        <Link to="/questions/newquestion">
          <Button>New Question</Button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questions: state.questions || [],
  };
};
export default connect(mapStateToProps)(QuestionPage);
