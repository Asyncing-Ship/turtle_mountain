// ----- Start of imports -----
// React Import:
import React from "react";
// Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import {
  HashRouter as Router,
  NavLink,
  Redirect,
  Route,
} from "react-router-dom";
// Chakra UI Imports:
import { ThemeProvider, CSSReset, Button, Heading } from "@chakra-ui/core";
// Protected Route Import:
// import ProtectedRoute from "../Utilities/ProtectedRoute/ProtectedRoute";
// Components Imports:
import Home from "../Pages/Home/Home"; // home component
// import Admin from '../Pages/Admin/Admin';
import TaskPage from "../ViewsTask/TaskPage";
import QuestionPage from "../ViewsQuestion/QuestionPage";
import PoliciesPage from "../Pages/Policies/PoliciesPage";
// CSS Import:
import "./App.css";
// ----- End of imports -----

export class App extends React.Component {
  state = { error: null };
  render() {
    return (
      <ThemeProvider>
        <CSSReset />
        <Router>
          <div className="App">
            <header className="App-header">
              <nav>
                <NavLink to="/home">
                  <Button m={2}>Home</Button>
                </NavLink>
                <NavLink to="/tasks">
                  <Button m={2}>Tasks</Button>
                </NavLink>
                <NavLink to="/questions">
                  <Button m={2}>Questions</Button>
                </NavLink>
                <NavLink to="/policies">
                  <Button m={2}>Policies</Button>
                </NavLink>
              </nav>
            </header>
            <Redirect exact from="/" to="/home" />
            {/*

              ,_____           _            _           _   _____             _            
              |  __ \         | |          | |         | | |  __ \           | |           
              | |__) | __ ___ | |_ ___  ___| |_ ___  __| | | |__) |___  _   _| |_ ___  ___ 
              |  ___/ '__/ _ \| __/ _ \/ __| __/ _ \/ _` | |  _  // _ \| | | | __/ _ \/ __|
              | |   | | | (_) | ||  __/ (__| ||  __/ (_| | | | \ \ (_) | |_| | ||  __/\__ \
              |_|   |_|  \___/ \__\___|\___|\__\___|\__,_| |_|  \_\___/ \__,_|\__\___||___/
                                                                              

          */}
            {/* <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/tasks" component={TaskPage} />
          <ProtectedRoute exact path="/questions" component={QuestionPage} />
          <ProtectedRoute exact path="/policies" component={PoliciesPage} /> */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/tasks" component={TaskPage} />
            <Route exact path="/questions" component={QuestionPage} />
            <Route exact path="/policies" component={PoliciesPage} />
            {/* <Route render={() => <Heading as="h1">404? Four Oh For!</Heading>} /> */}
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(App);
