// ----- Start of imports -----
// React Import:
import React from "react";
// React Router DOM Imports:
import { NavLink } from "react-router-dom";
// Chakra UI Imports:
import { Button, Box, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/core";
// ----- End of imports -----

const Unapproved = () => {
  return (
    <>
      <Box w={["100%", "75%", "50%"]} h="100%">
        <Alert
          rounded="lg"
          status="warning"
          variant="subtle"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          my={5}
        >
          <AlertIcon size="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Awaiting Approval
          </AlertTitle>
          <AlertDescription maxW="md">
            Your account is waiting to be approved for user privacy reasons.
            Please contact an administrator to have them confirm your status
            as a member of Turtle Mountain Connect.
          </AlertDescription>
        </Alert>
      </Box>
    </>
  );
};

export default Unapproved;
