import React from "react";
import { shallow, mount } from "enzyme";
import Login from "../../Components/Pages/Login/Login";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/core";
const store = createStore(rootReducer);
it("renders without crashing", () => {
  shallow(<Login />);
});
it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<Login color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
it("renders without crashing", () => {});
