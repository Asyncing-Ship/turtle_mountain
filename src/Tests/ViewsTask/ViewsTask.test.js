import React from "react";
import { shallow } from "enzyme";
import AcceptTask from "../../Components/Pages/ViewsTask/AcceptTask";
import CompleteTask from "../../Components/Pages/ViewsTask/CompleteTask";
import NewTask from "../../Components/Pages/ViewsTask/NewTask";
import { TaskPage } from "../../Components/Pages/ViewsTask/TaskPage";
import toJson from "enzyme-to-json";
import { createStore } from "redux";
import rootReducer from "../../Redux/Reducers/reducers";
import { Button, ButtonText } from "@chakra-ui/core";
const store = createStore(rootReducer);
it("renders correctly", () => {
  shallow(<AcceptTask />);
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
it("renders correctly", () => {
  const wrapper = shallow(<TaskPage />);
  const header = <div>No Tasks to Display</div>;
  expect(wrapper.contains(header)).toEqual(true);
});
it("renders correctly", () => {
  const wrapper = shallow(
    <TaskPage
      tasks={[
        { id: 1, title: "Task 1", status: "open" },
        { id: 2, title: "Task 2", status: "taken" },
      ]}
    />
  );
  const header = (
    <>
      <Button>
        Task 1<div className="btn-text">open</div>
      </Button>
      <Button>
        Task 2<div className="btn-text">taken</div>
      </Button>
    </>
  );
  expect(wrapper.contains(header)).toEqual(true);
});
