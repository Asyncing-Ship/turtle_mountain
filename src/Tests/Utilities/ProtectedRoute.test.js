import React from "react";
import { shallow } from "enzyme";
import { ProtectedRoute } from "../../Components/Utilities/ProtectedRoute/ProtectedRoute";
import toJson from "enzyme-to-json";
it("renders without crashing", () => {
  shallow(<ProtectedRoute user={{ id: 3 }} />);
});
it("renders without crashing", () => {
  shallow(<ProtectedRoute user={{ id: null }} />);
});
it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(
    <ProtectedRoute color={mockColor} user={{ id: 3 }} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
it("renders without crashing", () => {});
