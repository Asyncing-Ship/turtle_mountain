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
          <Icon name="warning" size="3.5rem" color="red.500" />
          <div className="btn-text">tasks</div>
        </Button>
        <br />
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/policies")}
        >
          <Icon name="info" size="3.5rem" color="black.500" />
          <div className="btn-text">policy</div>
        </Button>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/alerts")}
        >
          <Icon name="bell" size="3.5rem" color="orange.400" />
          <div className="btn-text">alerts</div>
        </Button>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/questions")}
        >
          <Icon name="question" size="3.5rem" color="yellow.300" />
          <div className="btn-text">q&amp;a</div>
        </Button>
        <br />
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => this.props.history.push("/chat")}
        >
          <Icon name="chat" size="3.5rem" color="green.300" />
          <div className="btn-text">chat</div>
        </Button>
      </div>
    );
  }
}

export default withRouter(Home);
