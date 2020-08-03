// ----- Start of imports -----
// React Import:
import React from "react";
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
} from "@chakra-ui/core";
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
          Please Sign In and have some fun.
        </Heading>
        <Box
          as="form"
          p={4}
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          // onSubmit={handleSubmit}
        >
          <Stack spacing={3} mb={4}>
            <Text fontSize="md">Sign in with Facebook</Text>
            <Button variantColor="blue" variant="solid">
              Facebook
            </Button>
          </Stack>
          <Stack spacing={3}>
            <Text fontSize="md">Sign in with your email and password</Text>
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
          <Stack spacing={3} mt={4}>
            <Button
              // isLoading={submitting}
              loadingText="Submitting"
              variantColor="teal"
              type="submit"
            >
              Sign In
            </Button>
            <Text fontSize="md">or</Text>
            <Button
              variantColor="teal"
              variant="outline"
              // onClick={form.reset}
              // isDisabled={submitting || pristine}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default SignIn;