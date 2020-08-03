import React from "react";
import { shallow, mount } from "enzyme";
import SignUp from "../../Components/Pages/SignUp/SignUp";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/core";
const store = createStore(rootReducer);
it("renders without crashing", () => {
  shallow(<SignUp />);
});
