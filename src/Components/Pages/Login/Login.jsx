// ----- Start of imports -----
// React Import:
import React, { Component } from "react";

import { connect } from "react-redux";
// Chakra UI Imports:
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  FormLabel,
} from "@chakra-ui/core";
// CSS Import:
import "./Login.css";
// ----- End of imports -----

class Login extends Component {
  state = {
    show: false,
    email: "",
    password: "",
  };

  handleShowClick = () => {
    if (this.state.show === true) {
      this.setState({
        show: false,
      });
    } else {
      this.setState({
        show: true,
      });
    }
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          email: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Box w={500} p={4} m="20px auto">
          <Heading as="h1" size="xl" textAlign="center">
            This is the Login Page.
          </Heading>
          <Box
            backgroundColor="#2f2e2e"
            as="form"
            p={4}
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            // onSubmit={handleSubmit}
          >
            <Stack spacing={3}>
              <Text fontSize="md">Login with your email and password</Text>

              <FormLabel htmlFor="email">
                <Input
                  variant="outline"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChangeFor("email")}
                />
              </FormLabel>

              <InputGroup size="md">
                <FormLabel htmlFor="password">
                  <Input
                    pr="4.5rem"
                    type={this.state.show ? "text" : "password"}
                    placeholder="Enter password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor("password")}
                  />
                </FormLabel>

                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={this.handleShowClick}>
                    {this.state.show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Stack spacing={3} mt={4}>
              <Button
                // isLoading={submitting}
                loadingText="Submitting"
                variantColor="teal"
                type="submit"
              >
                Login
              </Button>
              <Text fontSize="md">or</Text>
              <Button
                className="btn-signup"
                variantColor=""
                variant="outline"
                color="#f5fffa"
                onClick={this.login}
                // onClick={form.reset}
                // isDisabled={submitting || pristine}
              >
                Sign Up
              </Button>
              {/* <Text fontSize="md">Sign in with Facebook</Text> */}
              <Button variantColor="blue" variant="solid">
                <a
                  href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook/`}
                >
                  Login With Facebook
                </a>
              </Button>
            </Stack>
          </Box>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Login);
