import React from "react";
import { shallow, mount } from "enzyme";
import Home from "../../Components/Pages/Home/Home";
it("renders without crashing", () => {
  shallow(<Home />);
});
