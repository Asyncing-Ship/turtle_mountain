import React from "react";
import { shallow, mount } from "enzyme";
import App from "../../Components/App/App";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
it("renders correctly", () => {
  mount(
    <Provider store={store}>
      <App user={{ id: 1 }} />
    </Provider>
  );
});
it("renders correctly", () => {
  mount(
    <Provider store={store}>
      <App user={{}} />
    </Provider>
  );
});
