import React from "react";
import { shallow, mount } from "enzyme";
import AnswerQuestion from "../../Components/ViewsQuestion/AnswerQuestion";
import NewQuestion from "../../Components/ViewsQuestion/NewQuestion";
import QuestionPage from "../../Components/ViewsQuestion/QuestionPage";
it("renders without crashing", () => {
  shallow(<AnswerQuestion />);
});
it("renders without crashing", () => {
  shallow(<NewQuestion />);
});
it("renders without crashing", () => {
  shallow(<QuestionPage />);
});
