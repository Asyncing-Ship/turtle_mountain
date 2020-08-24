// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
import moment from "moment";
// React Redux Imports:
import {
  Button,
  Input,
  Accordion,
  AccordionHeader,
  AccordionPanel,
  AccordionItem,
  Alert,
  AlertIcon,
  Tag,
  TagIcon,
  TagLabel,
  IconButton,
  Flex,
  Box,
  Badge,
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
  componentDidMount() {
    Swal.fire({
      title: "Welcome",
      text:
        "This is our page for you to try out various components of our app. As you click through, you will discover various features of the app. None of what you do on this page will be sent to the server, so feel free to click buttons and send responses. They'll all disappear when you leave the Info Page",
      icon: "info",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK!",
    });
  }
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
              This is an example of a question. Questions will be formatted like
              this
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
              >
                <Input
                  isRequired
                  value={this.state.answer}
                  onChange={(event) => {
                    this.setState({ answer: event.target.value });
                  }}
                ></Input>
                <Button variantColor="green" type="submit">
                  Submit response
                </Button>
              </form>
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
              This is an example of a task.
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
          <Alert my={2} w="100%" rounded="full" status="info" variant="subtle">
            <AlertIcon
              onClick={() => {
                Swal.fire({
                  title: "Notification",
                  text:
                    "You will get a notification when someone responds to your question, accepts your task, or responds to your task.",
                  icon: "info",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "OK!",
                });
              }}
            />
            <Flex
              onClick={() => {
                Swal.fire({
                  title: "Notification",
                  text:
                    "You will get a notification when someone responds to your question, accepts your task, or responds to your task.",
                  icon: "info",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "OK!",
                });
              }}
            >
              <Tag rounded="full" size="sm" variantColor="purple" mx={2}>
                <TagIcon icon="star" size="10px" />
                <TagLabel>Jamie Hendricks</TagLabel>
              </Tag>
              <Box>
                Question Response
                <Badge mx={2} variant="subtle">
                  Is Jamie Lazy or is it just me?
                </Badge>
                <small>{moment().format("MM/DD/YY LT")}</small>
              </Box>
            </Flex>
            <IconButton
              flex={1}
              icon="close"
              rounded="full"
              position="absolute"
              right="4px"
              variant="ghost"
              variantColor="red"
              onClick={() => {
                Swal.fire({
                  title: "Delete Notification",
                  text:
                    "Once you delete a notification, it cannot be undone. be careful",
                  icon: "info",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "OK!",
                });
              }}
            />
          </Alert>
        </Accordion>
      </div>
    );
  }
}
export default InfoPage;
