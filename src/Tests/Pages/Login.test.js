import React from "react";
import { shallow, mount } from "enzyme";
import Login from "../../Components/Pages/Login/Login";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
import { Provider } from "react-redux";
const store = createStore(rootReducer);
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <Login />
    </Provider>
  );
});
