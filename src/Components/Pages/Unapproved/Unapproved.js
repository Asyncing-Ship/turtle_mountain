// ----- Start of imports -----
// React Import:
import React from "react";
// React Router DOM Imports:
import { NavLink } from "react-router-dom";
// Chakra UI Imports:
import { Button } from "@chakra-ui/core";
// ----- End of imports -----

const Unapproved = () => {
  return (
    <>
      <div className="h1">Waiting for approval</div>
      <div className="p">
        your account is waiting to be approved for user privacy reasons.
      </div>
    </>
  );
};

export default Unapproved;
