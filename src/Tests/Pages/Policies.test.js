import React from "react";
import { shallow } from "enzyme";
import PoliciesPage from "../../Components/Pages/Policies/PoliciesPage";
import Upload from "../../Components/Pages/Policies/Upload";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
import { Provider } from "react-redux";
const store = createStore(rootReducer);
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <PoliciesPage />
    </Provider>
  );
});
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <Upload />
    </Provider>
  );
});
