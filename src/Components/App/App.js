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
import { ThemeProvider, CSSReset, Button } from "@chakra-ui/core";
// Protected Route Import:
import ProtectedRoute from "../Utilities/ProtectedRoute/ProtectedRoute";
// Components Imports:
import Home from "../Pages/Home/Home"; // home component
// import Admin from '../Pages/Admin/Admin';
import TaskPage from "../Pages/ViewsTask/TaskPage";
import QuestionPage from "../Pages/ViewsQuestion/QuestionPage";
import PoliciesPage from "../Pages/Policies/PoliciesPage";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
// CSS Import:
import "./App.css";
import NewTask from "../Pages/ViewsTask/NewTask";
// ----- End of imports -----

export class App extends React.Component {
  state = { error: null };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <ThemeProvider>
        <CSSReset />
        <Router>
          <div className="App">
            <header className="App-header">
              <nav>
                {!this.props.user.id ? (
                  <>
                    <NavLink to="/login">
                      <Button m={2}>Login</Button>
                    </NavLink>
                    <NavLink to="/signup">
                      <Button m={2}>Signup</Button>
                    </NavLink>
                  </>
                ) : (
                  <>
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
                    <NavLink to="/login">
                      <Button
                        m={2}
                        // This button shows up in multiple locations and is styled differently
                        // because it's styled differently depending on where it is used, the className
                        // is passed to it from it's parents through React props
                        onClick={() => {
                          this.props.dispatch({ type: "LOGOUT" });
                        }}
                      >
                        Logout
                      </Button>
                    </NavLink>
                  </>
                )}
              </nav>
            </header>
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
              <ProtectedRoute path="/tasks/newTask">
                <NewTask />
              </ProtectedRoute>
              <ProtectedRoute exact path="/policies" component={PoliciesPage} />
              {/* <Route render={() => <Heading as="h1">404? Four Oh For!</Heading>} /> */}
            </div>
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
