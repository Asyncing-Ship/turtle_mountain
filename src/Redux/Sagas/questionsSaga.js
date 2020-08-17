import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
// function to get Questions
function* fetchQuestions(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get("/api/question");
    // const result = yield call(axios.get, '/question');
    yield put({ type: "SET_QUESTIONS", payload: response.data });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "error getting questions",
      },
    });
  }
}

function* fetchQuestionResponses(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield put({ type: "SET_QUESTION_RESPONSES", payload: [] });
    const response = yield Axios.get(
      `/api/question/responses/${action.payload.question_id}`
    );
    console.log(`done with 'get'`, response);
    // const result = yield call(axios.get, '/question');
    yield put({ type: "SET_QUESTION_RESPONSES", payload: response.data });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "error getting responses",
      },
    });
  }
}

// function to add Questions
function* addQuestion(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.post("/api/question", action.payload);
    yield put({ type: "FETCH_QUESTIONS" });
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "question added" },
    });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "error adding your Question",
      },
    });
  }
}

// function to add a Question Response
function* addQuestionResponse(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.post("/api/question_response", action.payload);
    yield Axios.put(`/api/question/answer/${action.payload.question_id}`);
    yield put({ type: "FETCH_QUESTION_RESPONSES", payload: action.payload });
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "response added" },
    });
    yield put({ type: "FETCH_QUESTIONS" });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "unable to add new Question Response to server",
      },
    });
  }
}

// function to delete Questions
function* deleteQuestion(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/questions/${action.payload}`);
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "question deleted" },
    });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "unable to delete Question from server",
      },
    });
  }
}

// function to delete a Questions response
function* deleteQuestionResponse(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/question_response/${action.payload}`);
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "response deleted" },
    });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "unable to delete Question Response from server",
      },
    });
  }
}

// function to get current Question
function* fetchCurrentQuestion(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/questions/${action.payload}`);
    // const result = yield call(axios.get, '/question');
    yield put({ type: "SET_CURRENT_QUESTION", payload: response.data });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "Unable to fetch current Question",
      },
    });
  }
}

function* markAsAnswer(action) {
  //update the question as answered
  try {
    yield Axios.put(`/api/question_response/verify/${action.payload.id}`);
    yield Axios.put(`/api/question/verify/${action.payload.question_id}`);
    yield put({ type: "FETCH_QUESTIONS" });
    yield put({
      type: "FETCH_QUESTION_RESPONSES",
      payload: { question_id: action.payload.question_id },
    });
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "Set as verified answer" },
    });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "Unable to mark as answered",
      },
    });
  }
}

function* verifyQuestionResponse(action) {
  //Update the question response as verified
  try {
    yield Axios.put(`/api/question_response/verify/${action.payload.id}`);
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "Unable to verify response",
      },
    });
  }
}

function* questionsSaga() {
  yield takeEvery("FETCH_QUESTIONS", fetchQuestions);
  yield takeEvery("FETCH_CURRENT_QUESTION", fetchCurrentQuestion);
  yield takeEvery("ADD_QUESTION", addQuestion);
  yield takeEvery("DELETE_QUESTION", deleteQuestion);
  yield takeEvery("MARK_AS_ANSWER", markAsAnswer); // only admin can
  // QUESTION RESPONSES BELOW
  yield takeEvery("FETCH_QUESTION_RESPONSES", fetchQuestionResponses);
  yield takeEvery("ADD_QUESTION_RESPONSE", addQuestionResponse);
  yield takeEvery("DELETE_QUESTION_RESPONSE", deleteQuestionResponse);
  yield takeEvery("VERIFY_QUESTION_RESPONSE", verifyQuestionResponse);
}

export default questionsSaga;
