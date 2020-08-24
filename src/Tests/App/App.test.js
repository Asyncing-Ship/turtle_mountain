import React from "react";
import { shallow, mount } from "enzyme";
import App from "../../Components/App/App";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
it("renders correctly", () => {
  shallow(
    <Provider store={store}>
      <App user={{ id: 1 }} toast={{ status: "success", message: "test" }} />
    </Provider>
  );
});
it("renders correctly", () => {
  shallow(
    <Provider store={store}>
      <App user={{}} toast={{ status: "success", message: "test" }} />
    </Provider>
  );
});
