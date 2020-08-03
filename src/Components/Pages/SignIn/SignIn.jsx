// ----- Start of imports -----
// React Import:
import React from "react";
// Chakra UI Imports:
import {
  Box,
  Button,
  ButtonGroup,
  CSSReset,
  Heading,
  Icon,
  Link,
  ThemeProvider,
  theme,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/core";
// ----- End of imports -----

const SignIn = () => {
  return (
    <div>
      <Box w={500} p={4} m="20px auto">
        <Heading as="h1" size="xl" textAlign="center">
          This is the Sign In Page.
        </Heading>
        <Heading as="h2" size="l" textAlign="center" m={5}>
          Chakra Example
        </Heading>
        <Box as="p" textAlign="center">
          Example using React Final Form and{" "}
          <Link href="https://chakra-ui.com" isExternal>
            Chakra <Icon name="external-link" mx="2px" />
          </Link>
          .
        </Box>
        <Box as="p" textAlign="center">
          <Link href="https://final-form.org/react" isExternal>
            Read Docs <Icon name="view" mx="2px" />
          </Link>
        </Box>
        <Form
          // onSubmit={onSubmit}
          // validate={validate}
          render={({
            handleSubmit,
            form,
            errors,
            submitting,
            pristine,
            values,
          }) => (
            <Box
              as="form"
              p={4}
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              onSubmit={handleSubmit}
            >
              <InputControl name="firstName" label="First Name" />
              <InputControl name="lastName" label="Last Name" />
              <TextareaControl name="notes" label="Notes" />
              <PercentComplete size="sm" my={5} hasStripe isAnimated />
              <ButtonGroup spacing={4}>
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
          )}
        />
      </Box>
    </div>
  );
}

export default SignIn;