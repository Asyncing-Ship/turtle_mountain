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
