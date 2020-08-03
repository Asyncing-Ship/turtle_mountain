// ----- Start of imports -----
// React Import:
import React from "react";
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

import { FacebookSquare } from "@styled-icons/boxicons-logos";
// ----- End of imports -----

const SignIn = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
          as="form"
          p={4}
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          // onSubmit={handleSubmit}
        >
          <ButtonGroup spacing={4}>
            <Button
              leftIcon={FacebookSquare}
              variantColor="pink"
              variant="solid"
            >
              Facebook
            </Button>
            <Button
              leftIcon={FacebookSquare}
              variantColor="blue"
              variant="outline"
            >
              Google
            </Button>
          </ButtonGroup>
          <Stack spacing={3}>
            <Input variant="outline" placeholder="Email" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
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
              variantColor="teal"
              variant="outline"
              // onClick={form.reset}
              // isDisabled={submitting || pristine}
            >
              Sign Up
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </div>
  );
}

export default SignIn;