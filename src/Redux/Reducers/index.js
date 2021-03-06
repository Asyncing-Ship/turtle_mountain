import { combineReducers } from "redux";
import user from "./userReducer";
import loginMode from "./loginModeReducer";
import errors from "./errorsReducer";
import tasks from "./tasksReducer";
import questions from "./questionsReducer";
import policies from "./policyReducer";
import users from "./usersReducer";
import notis from "./notificationReducer";

import toast from "./toastReducer";
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  user, // will have an id and email if someone is logged in
  loginMode,
  errors,
  tasks,
  questions,
  policies,
  users,
  toast,
  notis,
});

export default rootReducer;
