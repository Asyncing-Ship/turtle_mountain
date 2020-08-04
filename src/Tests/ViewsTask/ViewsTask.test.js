import React from "react";
import { shallow } from "enzyme";
import AcceptTask from "../../Components/Pages/ViewsTask/AcceptTask";
import CompleteTask from "../../Components/Pages/ViewsTask/CompleteTask";
import NewTask from "../../Components/Pages/ViewsTask/NewTask";
import { TaskPage } from "../../Components/Pages/ViewsTask/TaskPage";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
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
it("renders correctly", () => {
  const wrapper = shallow(<TaskPage />);
  const header = <div>No Tasks to Display</div>;
  expect(wrapper.contains(header)).toEqual(true);
});
