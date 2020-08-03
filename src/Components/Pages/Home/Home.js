import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/tasks")}
        >
          <Icon name="warning" size="5rem" color="red.500" />
          Tasks
        </Button>
        <br />
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/policies")}
        >
          <Icon name="info" size="5rem" color="black.500" />
          Policy
        </Button>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/alerts")}
        >
          <Icon name="bell" size="4rem" color="orange.500" />
          Alerts
        </Button>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/questions")}
        >
          <Icon name="question" size="5rem" color="yellow.500" />
          Q&amp;A
        </Button>
        <br />
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/chat")}
        >
          <Icon name="chat" size="5rem" color="red.500" />
          Chat
        </Button>
      </div>
    );
  }
}

export default withRouter(Home);
