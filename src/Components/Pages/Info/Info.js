// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
import moment from "moment";
// React Redux Imports:
import {
  Button,
  Input,
  FormControl,
  Accordion,
  AccordionHeader,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/core";
import Response from "./Response";
import Swal from "sweetalert2";
import AcceptTask from "./AcceptTask";
// Components Imports:
// CSS Import:
// ----- End of imports -----

export class InfoPage extends Component {
  state = {
    answer: "",
    answers: [{ content: "this is an example response", verified: false }],
    questionVerified: false,
  };
  handleChange = (event, value) => {
    this.setState({
      [value]: event.target.value,
    });
  };
  setVerified = () => {
    this.setState({
      answers: [
        {
          content:
            "this is a verified answer. all other answers will be un-verified",
          verified: true,
        },
        {
          content:
            "this is an un-verified answer. you cannot set it to verified because there is already a verified answer",
          verified: false,
        },
      ],
      questionVerified: true,
    });
  };
  render() {
    return (
      <div>
        <Accordion allowToggle className="accordion-item" defaultIsOpen="False">
          <AccordionItem>
            <AccordionHeader
              onClick={() => {
                Swal.fire({
                  title: "Collapse",
                  text:
                    "Clicking this toggles whether a menu is collapsed or expanded. only one menu can be expanded at a time",
                  icon: "info",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "OK!",
                });
              }}
              className="accordion-head"
              _expanded={{ bg: "#c79e61", color: "white" }}
              _hover={{ bg: "#c79e61", color: "white" }}
            >
              Question Example
            </AccordionHeader>
            <AccordionPanel className="apanel" wordBreak="break-word" pb={4}>
              This is an example of a question. Question will be formatted like
              this. Click on a button or text field to get information about
              what it does
              {this.state.answers.map((x, i) => (
                <Response
                  setVerified={this.setVerified}
                  questionVerified={this.state.questionVerified}
                  verified={x.verified}
                  response={{
                    date_posted: moment(),
                    index: i,
                    content: x.content,
                    user: { first_name: "Example", last_name: "User" },
                  }}
                ></Response>
              ))}
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  this.setState({
                    answers: [
                      ...this.state.answers,
                      { content: this.state.answer, verified: false },
                    ],
                    answer: "",
                  });
                }}
              ></form>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader
              onClick={() => {
                Swal.fire({
                  title: "Collapse",
                  text:
                    "Clicking this toggles whether a menu is collapsed or expanded. only one menu can be expanded at a time",
                  icon: "info",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "OK!",
                });
              }}
              className="accordion-head"
              _expanded={{ bg: "#c79e61", color: "white" }}
              _hover={{ bg: "#c79e61", color: "white" }}
            >
              Task Example
            </AccordionHeader>
            <AccordionPanel className="apanel" wordBreak="break-word" pb={4}>
              This is an example of a task. Question will be formatted like
              this. Click on a button or text field to get information about
              what it does
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  this.setState({
                    answers: [
                      ...this.state.answers,
                      { content: this.state.answer, verified: false },
                    ],
                    answer: "",
                  });
                }}
              >
                <AcceptTask task={"fight me"} />
              </form>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
export default InfoPage;
