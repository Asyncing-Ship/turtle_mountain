// ----- Start of imports -----
// React Import:
import React from "react";
// Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import {
  NavLink,
} from "react-router-dom";
// Chakra UI Imports:
import { Button } from "@chakra-ui/core";
// CSS Import:
import "../../App/App.css";
// ----- End of imports -----

export class Navbar extends React.Component {
  state = { error: null };

  UNSAFE_componentWillMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }
  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    // tasks: state.tasks.tasks,
  };
};
export default connect(mapStateToProps)(Navbar);
