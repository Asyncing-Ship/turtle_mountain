import React from "react";
import { shallow, mount } from "enzyme";
import AnswerQuestion from "../../Components/Pages/ViewsQuestion/AnswerQuestion";
import NewQuestion from "../../Components/Pages/ViewsQuestion/NewQuestion";
import QuestionPage from "../../Components/Pages/ViewsQuestion/QuestionPage";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
import { Provider } from "react-redux";
const store = createStore(rootReducer);
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <AnswerQuestion />
    </Provider>
  );
});
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <NewQuestion />
    </Provider>
  );
});
it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <QuestionPage />
    </Provider>
  );
});
