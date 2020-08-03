import React from "react";
import { shallow, mount } from "enzyme";
import AnswerQuestion from "../../Components/Pages/ViewsQuestion/AnswerQuestion";
import NewQuestion from "../../Components/Pages/ViewsQuestion/NewQuestion";
import QuestionPage from "../../Components/Pages/ViewsQuestion/QuestionPage";
it("renders without crashing", () => {
  shallow(<AnswerQuestion />);
});
it("renders without crashing", () => {
  shallow(<NewQuestion />);
});
it("renders without crashing", () => {
  shallow(<QuestionPage />);
});
