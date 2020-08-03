import React from "react";
import { shallow, mount } from "enzyme";
import AcceptTask from "../../Components/ViewsTask/AcceptTask";
import CompleteTask from "../../Components/ViewsTask/CompleteTask";
import NewTask from "../../Components/ViewsTask/NewTask";
import TaskPage from "../../Components/ViewsTask/TaskPage";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/core";
const store = createStore(rootReducer);
it("renders correctly", () => {
  shallow(<AcceptTask />);
});

it("renders correctly", () => {
  shallow(<CompleteTask />);
});
it("renders correctly", () => {
  shallow(<NewTask />);
});
it("renders correctly", () => {
  shallow(<TaskPage />);
});
