import { combineReducers } from "redux";

// Used to store questions returned from the server
const questions = (state = [], action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return action.payload;
    default:
      return state;
  }
};

const questionsResponse = (state = [], action) => {
  switch (action.type) {
    case "SET_QUESTION_RESPONSES":
      return [action.payload];
    default:
      return state;
  }
};

// Used to store the detail of the question that is selected
const questionDetail = (state = [], action) => {
  switch (action.type) {
    case "SET_QUESTION_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the current question that is selected
const currentQuestion = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION":
      return action.payload;
    default:
      return state;
  }
};

const currentQuestionId = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION_ID":
      return action.payload;
    default:
      return state;
  }
};

const questionAuthor = (state = [], action) => {
  switch (action.type) {
    case "SET_QUESTION_AUTHOR":
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  questions,
  questionDetail,
  currentQuestionId,
  currentQuestion,
  questionAuthor,
  questionsResponse,
});
