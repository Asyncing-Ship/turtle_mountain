import React from "react";
import { shallow, mount } from "enzyme";
import { App } from "../../Components/App/App";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/core";
const store = createStore(rootReducer);
it("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});
it("renders without crashing", () => {
  shallow(<App />);
});
it("renders nav buttons", () => {
  const wrapper = shallow(<App />);
  const header = (
    <nav>
      <NavLink to="/login">
        <Button m={2}>Login</Button>
      </NavLink>
      <NavLink to="/signup">
        <Button m={2}>Signup</Button>
      </NavLink>
      <NavLink to="/home">
        <Button m={2}>Home</Button>
      </NavLink>
      <NavLink to="/tasks">
        <Button m={2}>Tasks</Button>
      </NavLink>
      <NavLink to="/questions">
        <Button m={2}>Questions</Button>
      </NavLink>
      <NavLink to="/policies">
        <Button m={2}>Policies</Button>
      </NavLink>
    </nav>
  );
  expect(wrapper.contains(header)).toEqual(true);
});
