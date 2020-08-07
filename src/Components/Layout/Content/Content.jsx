// ----- Start of imports -----
// React Import:
import React from "react";
// Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import { Redirect, Route } from "react-router-dom";
// Protected Route Import:
import ProtectedRoute from "../../Utilities/ProtectedRoute/ProtectedRoute";
// Components Imports:
import Home from "../../Pages/Home/Home";
import TaskPage from "../../Pages/ViewsTask/TaskPage";
import QuestionPage from "../../Pages/ViewsQuestion/QuestionPage";
import PoliciesPage from "../../Pages/Policies/PoliciesPage";
import Login from "../../Pages/Login/Login.jsx";
import SignUp from "../../Pages/SignUp/SignUp.jsx";
import NewQuestion from "../../Pages/ViewsQuestion/NewQuestion";
// CSS Import:
import "../../App/App.css";
// ----- End of imports -----

export class Content extends React.Component {
  state = { error: null };

  UNSAFE_componentWillMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }
  render() {
    return (
      <div className="App-page">
        {!this.props.user.id ? (
          <Redirect exact from="/" to="/login" />
        ) : (
          <Redirect exact from="/" to="/home" />
        )}
        <ProtectedRoute
          exact
          path="/home"
          component={Home}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/signup"
          component={SignUp}
        />
        <ProtectedRoute
          exact
          path="/tasks"
          component={TaskPage}
        />
        <ProtectedRoute
          exact
          path="/questions"
          component={QuestionPage}
        />
        <ProtectedRoute
          exact
          path="/questions/new"
          component={NewQuestion}
        />
        <ProtectedRoute
          exact
          path="/policies"
          component={PoliciesPage}
        />
        {/* <Route render={() => <Heading as="h1">404? Four Oh For!</Heading>} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    // tasks: state.tasks.tasks,
  };
};
export default connect(mapStateToProps)(Content);
