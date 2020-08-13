import React from "react";
import { shallow } from "enzyme";
import AdminPage from "../../Components/Pages/Admin/AdminPage";
import Approved from "../../Components/Pages/Admin/Approved";
import Incoming from "../../Components/Pages/Admin/Incoming";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
import { Provider } from "react-redux";
const store = createStore(rootReducer);
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <AdminPage />
    </Provider>
  );
});

it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <Approved />
    </Provider>
  );
});

it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <Incoming />
    </Provider>
  );
});
