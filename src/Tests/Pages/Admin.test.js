import React from "react";
import { shallow } from "enzyme";
import AdminPage from "../../Components/Pages/Admin/AdminPage";
import Approved from "../../Components/Pages/Admin/Approved";
import Incoming from "../../Components/Pages/Admin/Incoming";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
const store = createStore(rootReducer);
it("renders without crashing", () => {
  shallow(<AdminPage />);
});
it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<AdminPage color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<Approved />);
});
it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<Approved color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<Incoming />);
});
it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<Incoming color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
