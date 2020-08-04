// ----- Start of imports -----
// React Import:
import React, { Component } from "react";
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
} from "@chakra-ui/core";
// CSS Import:
import "../Login/Login.css";
// ----- End of imports -----

class SignUp extends Component {
  state = {
    show: false,
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

  render() {
    return (
      <div>
        <Box w={500} p={4} m="20px auto">
          <Heading as="h1" size="xl" textAlign="center">
            This is the Sign In Page.
          </Heading>
          <Heading as="h2" size="l" textAlign="center" m={5}>
            Chakra Example
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
              <Input variant="outline" placeholder="First Name" />
              <Input variant="outline" placeholder="Last Name" />
              <Input variant="outline" placeholder="Email" />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={this.state.show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={this.handleShowClick}>
                    {this.state.show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>

            <ButtonGroup spacing={4} mt={4}>
              <Button
                // isLoading={submitting}
                loadingText="Submitting"
                variantColor="teal"
                type="submit"
              >
                Sign In
              </Button>
              <Button
                className="btn-signup"
                variantColor=""
                variant="outline"
                color="#f5fffa"
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

export default SignUp;
