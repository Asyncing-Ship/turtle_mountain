import React, { Component } from 'react';
import CompleteTask from './CompleteTask';
import {
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionHeader,
  AccordionItem,
  Accordion
} from '@chakra-ui/core';
import TaskBadge from './TaskBadge';
import { connect } from 'react-redux';

class MyTask extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_TASKS" });
  }

  render() {
    return (
      <>
        {/* the second button will give us this result,
            after filtering by tasks, assigned to the current user,
            we map each task to an accordion item with the title being the task title. 
            then feed each task into its own completeTask component*/}
        <Accordion m={3} className="accordion" allowMultiple>
          {this.props.tasks
            .filter((x) => {
              console.log(x.assigned_to, this.props.user.id);
              return x.assigned_to === this.props.user.id;
            })
            .map((x, i) => (
              <AccordionItem className="accordion-item" key={i} defaultIsOpen="False">
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
                      <CompleteTask task={x} />
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
    user: state.user,
  };
};
// ----- End of mapStateToProps function -----

export default connect(mapStateToProps)(MyTask);