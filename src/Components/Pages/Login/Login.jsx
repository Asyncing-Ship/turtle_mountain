// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux import:
import { connect } from "react-redux";
// Chakra UI Imports:
import {
  Box,
  Button,
  Heading,
  Input,
  InputRightElement,
  Stack,
  Text,
  FormLabel,
  InputGroup,
  FormControl,
  Alert,
  AlertIcon,
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
      this.props.history.push("/home");
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
        {/* Start of log in message */}
        {this.props.errors.loginMessage && (
          <Alert
            maxW="80%"
            minW="80%"
            ml="auto"
            mr="auto"
            my={3}
            rounded="full"
            status="error"
          >
            <AlertIcon />
            {this.props.errors.loginMessage}
            {/* <CloseButton
              rounded="full"
              position="absolute"
              right="8px"
              top="8px"
            /> */}
          </Alert>
        )}
        {/* End of log in message */}
        {/* Start of Log In Area */}
        <Box w={[400, 500, 600]} p={4} m="20px auto">
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            Please Login
          </Heading>
          <Box
            backgroundColor="#2f2e2e"
            as="form"
            p={4}
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            {/* Start of Form Area */}
            <form onSubmit={this.login}>
              <FormControl>
                <Stack spacing={3}>
                  <Text fontSize="md">Login with your email and password</Text>
                  <FormLabel p={0} htmlFor="email">
                    Email:
                    <Input
                      isRequired
                      variant="outline"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChangeFor("email")}
                    />
                  </FormLabel>
                  <FormLabel p={0} htmlFor="password">
                    Password:
                    <InputGroup>
                      <Input
                        isRequired
                        pr="4.5rem"
                        type={this.state.show ? "text" : "password"}
                        placeholder="Enter password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor("password")}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          variantColor="gray"
                          color="gray.800"
                          h="1.75rem"
                          size="sm"
                          onClick={this.handleShowClick}
                        >
                          {this.state.show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormLabel>
                </Stack>
                <Stack spacing={3} mt={4}>
                  <Button
                    loadingText="Submitting"
                    variantColor="teal"
                    type="submit"
                  >
                    Login
                  </Button>
                  <Text>or</Text>
                  <Button
                    className="btn-signup"
                    variantColor="teal"
                    variant="outline"
                    color="#f5fffa"
                    onClick={() => this.props.history.push("/signup")}
                  >
                    Sign Up
                  </Button>
                  <Button
                    as="a"
                    href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook/`}
                    variantColor="blue"
                    variant="solid"
                  >
                    Login With Facebook
                  </Button>
                </Stack>
              </FormControl>
            </form>
            {/* End of Form Area */}
          </Box>
        </Box>
        {/* End of Log In Area */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Login);
