// ----- Start of imports -----
// React Import:
import React from "react";
// Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import {
  BrowserRouter as Router,
} from "react-router-dom";
// Chakra UI Imports:
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
// Custom Chakra theme import:
import customTheme from "../../style/theme";
// Components Imports:
import Navbar from "../Layout/Navbar/Navbar"
import Content from "../Layout/Content/Content";
// CSS Import:
import "./App.css";
// ----- End of imports -----

export class App extends React.Component {
  state = { error: null };

  UNSAFE_componentWillMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Router>
          <div className="App">
            <Navbar />
            <Content />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tasks: state.tasks.tasks,
  };
};
export default connect(mapStateToProps)(App);
