import React from "react";
import { shallow } from "enzyme";
import PoliciesPage from "../../Components/Pages/Policies/PoliciesPage";
import Upload from "../../Components/Pages/Policies/Upload";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
it("renders without crashing", () => {
  shallow(<PoliciesPage />);
});
it("renders without crashing", () => {
  shallow(<Upload />);
});
