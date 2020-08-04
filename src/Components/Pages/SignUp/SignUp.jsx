// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
import { connect } from "react-redux";

// Chakra UI Imports:
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  FormLabel,
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
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    // console.log(`In change: ${propertyName}: ${event.target.value}`);
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Box w={500} p={4} m="20px auto">
          <Heading as="h1" size="xl" textAlign="center">
            This is the Sign In Page.
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
              <FormLabel htmlFor="first_name">
                First Name:
                <Input
                  variant="outline"
                  placeholder="First Name"
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleInputChangeFor("first_name")}
                />
              </FormLabel>

              <FormLabel htmlFor="last_name">
                Last Name:
                <Input
                  variant="outline"
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleInputChangeFor("last_name")}
                />
              </FormLabel>

              <FormLabel htmlFor="email">
                Email:
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
                  Password:
                  <Input
                    pr="4.5rem"
                    type={this.state.show ? "text" : "password"}
                    placeholder="Enter password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor("password")}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={this.handleShowClick}
                    >
                      {this.state.show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </FormLabel>
              </InputGroup>
            </Stack>

            <ButtonGroup spacing={4} mt={4}>
              <Button
                // isLoading={submitting}
                loadingText="Submitting"
                variantColor="teal"
                type="submit"
                onClick={() => this.props.history.push("/login")}
              >
                Login
              </Button>
              <Button
                className="btn-signup"
                variantColor=""
                variant="outline"
                color="#f5fffa"
                onClick={this.registerUser}
                // onClick={form.reset}
                // isDisabled={submitting || pristine}
              >
                Sign Up
              </Button>
              <Button variantColor="blue" variant="solid">
                Facebook
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </div>
    );
  }
}

export default connect()(SignUp);
