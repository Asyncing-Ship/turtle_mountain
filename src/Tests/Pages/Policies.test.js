import React from "react";
import { shallow } from "enzyme";
import PoliciesPage from "../../Components/Pages/Policies/PoliciesPage";
import Upload from "../../Components/Pages/Policies/Upload";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
it("renders without crashing", () => {
  shallow(<PoliciesPage />);
});
it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<PoliciesPage color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
it("renders without crashing", () => {
  shallow(<Upload />);
});
it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<Upload color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
