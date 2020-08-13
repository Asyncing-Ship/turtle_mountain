import { combineReducers } from "redux";

// Used to store tasks returned from the server
const tasks = (state = [], action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the detail of the task that is selected
const taskDetail = (state = [], action) => {
  switch (action.type) {
    case "SET_TASK_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

// reducer to hold our current task tags
const taskTags = (state = [], action) => {
  switch (action.type) {
    case "SET_TASK_TAGS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the current task that is selected
const currentTask = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_TASK":
      return action.payload;
    default:
      return state;
  }
};

const currentTaskId = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_TASK_ID":
      return action.payload;
    default:
      return state;
  }
};

const taskAuthor = (state = [], action) => {
  switch (action.type) {
    case "SET_TASK_AUTHOR":
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  tasks,
  taskDetail,
  currentTaskId,
  currentTask,
  taskAuthor,
  taskTags,
});
