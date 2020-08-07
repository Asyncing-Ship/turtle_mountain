import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";
import "./Home.css";

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => history.push("/tasks")}
        >
          <Icon name="warning" size="3.5rem" color="red.500" />
          <div className="btn-text">tasks</div>
        </Button>
        <br />
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
          onClick={() => history.push("/alerts")}
        >
          <Icon name="bell" size="3.5rem" color="orange.400" />
          <div className="btn-text">alerts</div>
        </Button>
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => history.push("/questions")}
        >
          <Icon name="question" size="3.5rem" color="yellow.300" />
          <div className="btn-text">questions</div>
        </Button>
        <br />
        <Button
          m={2}
          className="CircleBtn"
          onClick={() => history.push("/chat")}
        >
          <Icon name="chat" size="3.5rem" color="green.300" />
          <div className="btn-text">chat</div>
        </Button>
      </div>
    );
  }
}

export default withRouter(Home);
