// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
// React Redux Import:
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
  FormLabel,
  Text,
  FormControl,
} from "@chakra-ui/core";
// CSS Import:
import "../Login/Login.css";
// ----- End of imports -----

class SignUp extends Component {
  state = {
    show: false,
    email: "",
    password: "",
    first_name: "",
    last_name: "",
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

  registerUser = (event) => {
    console.log("registerUser Function");
    event.preventDefault();

    if (this.state.email && this.state.password) {
      console.log(this.state);
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
        },
      });
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
    this.props.history.push("/home");
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <Box w={500} p={4} m="20px auto">
            <Heading as="h3" size="xl" textAlign="center" mb={6}>
              {this.props.errors.registrationMessage}
            </Heading>
          </Box>
        )}
        <Box w={500} p={4} m="20px auto">
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            Please Sign Up
          </Heading>
          <Box
            backgroundColor="#2f2e2e"
            as="form"
            p={4}
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            <form onSubmit={this.registerUser}>
              <FormControl>
                <Stack spacing={3}>
                  <FormLabel p={0} htmlFor="first_name">
                    First Name:
                    <Input
                      isRequired
                      variant="outline"
                      placeholder="First Name"
                      type="text"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={this.handleInputChangeFor("first_name")}
                    />
                  </FormLabel>
                  <FormLabel p={0} htmlFor="last_name">
                    Last Name:
                    <Input
                      isRequired
                      variant="outline"
                      placeholder="Last Name"
                      type="text"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={this.handleInputChangeFor("last_name")}
                    />
                  </FormLabel>
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
                  <Button type="submit" variantColor="teal" color="#f5fffa">
                    Sign Up
                  </Button>
                  <Text>or</Text>
                  <Button
                    className="btn-signup"
                    variantColor=""
                    variant="outline"
                    color="#f5fffa"
                    onClick={() => this.props.history.push("/login")}
                  >
                    Return to Login
                  </Button>
                  <Button
                    as="a"
                    href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook/`}
                    variantColor="blue"
                    variant="solid"
                  >
                    Sign Up With Facebook
                  </Button>
                </Stack>
              </FormControl>
            </form>
          </Box>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(SignUp);
