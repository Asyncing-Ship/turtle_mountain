import React, { Component } from "react";
import { withRouter } from "react-router";
import { Box, Button, SimpleGrid } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";
import "./Home.css";

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <Box>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => history.push("/tasks")}
        >
          <Icon name="warning" size="3.5rem" color="red.500" />
          <div className="btn-text">tasks</div>
        </Button>
        <SimpleGrid columns={[1, null, 3]}>
          <Button
            m={2}
            className="CircleBtn"
            onClick={() => history.push("/policies")}
          >
            <Icon name="info" size="3.5rem" color="blue.200" />
            <div className="btn-text">policy</div>
          </Button>
          <Button
            m={2}
            className="CircleBtn"
            onClick={() => history.push("/profile")}
          >
            <Icon name="chat" size="3.5rem" color="green.300" />
            <div className="btn-text">profile</div>
          </Button>
          <Button
            m={2}
            className="CircleBtn"
            onClick={() => history.push("/questions")}
          >
            <Icon name="question" size="3.5rem" color="yellow.300" />
            <div className="btn-text">questions</div>
          </Button>
        </SimpleGrid>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => history.push("/alerts")}
        >
          <Icon name="bell" size="3.5rem" color="orange.400" />
          <div className="btn-text">alerts</div>
        </Button>
      </Box>
    );
  }
}

export default withRouter(Home);
