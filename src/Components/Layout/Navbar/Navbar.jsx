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
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
// CSS Import:
import "../../App/App.css";
// ----- End of imports -----

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export class Navbar extends React.Component {
  state = {
    error: null,
    show: false,
  };

  UNSAFE_componentWillMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  handleToggle = () => {
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  render() {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="tmarBlack.800"
        color="white"
        direction="row"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Turtle Mountain Connect
          </Heading>
        </Flex>

        <Button
          display={{ base: "block", md: "none" }}
          onClick={this.handleToggle}
        >
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
        <Box
          display={{ sm: this.state.show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Flex direction="row">
            {!this.props.user.id ? (
              <>
                <MenuItems>
                  <NavLink to="/login">
                    <Button m={2}>Login</Button>
                  </NavLink>
                </MenuItems>
                <MenuItems>
                  <NavLink to="/signup">
                    <Button m={2}>Signup</Button>
                  </NavLink>
                </MenuItems>
              </>
            ) : (
              <>
                <MenuItems>
                  <NavLink to="/home">
                    <Button m={2}>Home</Button>
                  </NavLink>
                </MenuItems>
                <MenuItems>
                  <NavLink to="/tasks">
                    <Button m={2}>Tasks</Button>
                  </NavLink>
                </MenuItems>
                <MenuItems>
                  <NavLink to="/questions">
                    <Button m={2}>Questions</Button>
                  </NavLink>
                </MenuItems>
                <MenuItems>
                  <NavLink to="/policies">
                    <Button m={2}>Policies</Button>
                  </NavLink>
                </MenuItems>
                <MenuItems>
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
                </MenuItems>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
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
