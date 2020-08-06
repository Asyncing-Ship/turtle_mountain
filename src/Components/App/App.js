// ----- Start of imports -----
// React Import:
import React from "react";
// Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import {
  HashRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
// Chakra UI Imports:
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
// Custom Chakra theme import:
import customTheme from "../../style/theme";
// Protected Route Import:
import ProtectedRoute from "../Utilities/ProtectedRoute/ProtectedRoute";
// Components Imports:
import Home from "../Pages/Home/Home";
import TaskPage from "../Pages/ViewsTask/TaskPage";
import QuestionPage from "../Pages/ViewsQuestion/QuestionPage";
import PoliciesPage from "../Pages/Policies/PoliciesPage";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import NewTask from "../Pages/ViewsTask/NewTask";
import NewQuestion from "../Pages/ViewsQuestion/NewQuestion";

import Navbar from "../Layout/Navbar/Navbar"
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
            <Navbar/>
            <div className="App-page">
              {!this.props.user.id ? (
                <Redirect exact from="/" to="/login" />
              ) : (
                <Redirect exact from="/" to="/home" />
              )}
              {/*

              ,_____           _            _           _   _____             _            
              |  __ \         | |          | |         | | |  __ \           | |           
              | |__) | __ ___ | |_ ___  ___| |_ ___  __| | | |__) |___  _   _| |_ ___  ___ 
              |  ___/ '__/ _ \| __/ _ \/ __| __/ _ \/ _` | |  _  // _ \| | | | __/ _ \/ __|
              | |   | | | (_) | ||  __/ (__| ||  __/ (_| | | | \ \ (_) | |_| | ||  __/\__ \
              |_|   |_|  \___/ \__\___|\___|\__\___|\__,_| |_|  \_\___/ \__,_|\__\___||___/
                                                                              

          */}
              <ProtectedRoute exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <ProtectedRoute exact path="/tasks" component={TaskPage} />
              <ProtectedRoute
                exact
                path="/questions"
                component={QuestionPage}
              />
              <ProtectedRoute
                exact
                path="/questions/newquestion"
                component={NewQuestion}
              />
              <ProtectedRoute path="/tasks/newTask">
                <NewTask />
              </ProtectedRoute>
              <ProtectedRoute exact path="/policies" component={PoliciesPage} />
              {/* <Route render={() => <Heading as="h1">404? Four Oh For!</Heading>} /> */}
            </div>
            {/* End of pages content area */}
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
