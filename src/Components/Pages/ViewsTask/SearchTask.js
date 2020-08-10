import React, { Component } from 'react';
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
  Icon
} from '@chakra-ui/core';
import TaskBadge from './TaskBadge';
import { connect } from 'react-redux';

class SearchTask extends Component {
  state = {
    searchString: "",
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }

  render() {
    return (
      <>
        {/* The input will be used to filter the tasks by matching results. it should do this without a button */}
        <InputGroup m={3} w="100%">
          <InputLeftElement
            children={
              <Icon
                name="search"
                color="gray.400"
              />
            }
          />
          <Input
            className="tasks-search"
            value={this.state.searchString}
            onChange={(event) =>
              this.setState({ searchString: event.target.value })
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
        <Accordion m={3} className="accordion" allowMultiple>
          {this.props.tasks
            .filter(
              (x) =>
                x.title.includes(this.state.searchString) ||
                x.content.includes(this.state.searchString) ||
                x.first_name.includes(this.state.searchString) ||
                x.last_name.includes(this.state.searchString)
            )
            .map((x, i) => (
              <AccordionItem key={i} defaultIsOpen="False">
                {({ isExpanded }) => (
                  <>
                    <AccordionHeader
                      className="accordion-head"
                      _expanded={{ bg: "#c79e61", color: "white" }}
                      _hover={{ bg: "#c79e61", color: "white" }}
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
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
        </Accordion>
      </>
    )
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