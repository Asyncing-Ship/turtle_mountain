import React from "react";
import { shallow } from "enzyme";
import AcceptTask from "../../Components/Pages/ViewsTask/AcceptTask";
import CompleteTask from "../../Components/Pages/ViewsTask/CompleteTask";
import NewTask from "../../Components/Pages/ViewsTask/NewTask";
import { TaskPage } from "../../Components/Pages/ViewsTask/TaskPage";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/index";
const store = createStore(rootReducer);
it("renders correctly", () => {
  shallow(
    <AcceptTask
      task={{
        title: "go take a shower",
        content:
          "Try not to drop the soap, we don't need any more blood on our floor",
      }}
    />
  );
});
it("renders correctly", () => {
  shallow(<CompleteTask />);
});
it("renders correctly", () => {
  shallow(<NewTask />);
});
it("renders correctly", () => {
  shallow(<TaskPage />);
});
