import React, { Component } from "react";
import {
  AccordionPanel,
  AccordionIcon,
  AccordionHeader,
  Box,
  AccordionItem,
  Accordion,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/core";
import TaskBadge from "./TaskBadge";
import { connect } from "react-redux";
import moment from "moment";

class SearchTask extends Component {
  state = {
    searchString: "",
    index: -1,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }

  render() {
    return (
      <>
        <h3>This page contains an archive of all Tasks</h3>
        <small>
          to find a task, start searching for it. You can search by title or
          content
        </small>
        {/* The input will be used to filter the tasks by matching results. it should do this without a button */}
        <InputGroup m={3} w="100%">
          <InputLeftElement
            children={<Icon name="search" color="gray.400" />}
          />
          <Input
            className="questions-search"
            value={this.state.searchString}
            onChange={(event) =>
              this.setState({ searchString: event.target.value, index: -1 })
            }
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
          m={3}
          className="accordion"
          allowToggle
          index={this.state.index}
        >
          {this.props.tasks
            .filter(
              (x) =>
                x.title.includes(this.state.searchString) ||
                x.content.includes(this.state.searchString) ||
                x.first_name.includes(this.state.searchString) ||
                x.last_name.includes(this.state.searchString)
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
                      className="accordion-head"
                      _expanded={{ bg: "#c79e61", color: "white" }}
                      _hover={{ bg: "#c79e61", color: "white" }}
                      onClick={() => this.setState({ index: i })}
                    >
                      <Box flex="1" textAlign="left">
                        {x.title}
                      </Box>
                      <TaskBadge x={x} />
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel className="apanel" pb={4}>
                      <Box flex="1" textAlign="left">
                        {x.content}
                      </Box>
                      <Box flex="1" textAlign="left">
                        <small>
                          <i>
                            Posted at:{" "}
                            {moment(x.date_posted).format("MM/DD/YY LT")} (By{" "}
                            {x.first_name} {x.last_name})
                          </i>
                        </small>
                      </Box>
                      {console.log(x)}
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
    tasks: state.tasks.tasks,
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(SearchTask);
