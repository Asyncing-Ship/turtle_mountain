// ----- Start of imports -----
// React Import:
import React from "react";
// Chakra UI Imports:
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/core";
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
          py={10}
          my={5}
        >
          <AlertIcon size="40px" mr={0} />
          <AlertTitle my={4} fontSize="lg">
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
