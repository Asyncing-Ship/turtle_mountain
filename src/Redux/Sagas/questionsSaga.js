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
    alert("Error fetching Questions", error);
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
  } catch (error) {
    // console.log('Error fetching Questions', error);
    alert("unable to add new Question to server");
  }
}

// function to delete Questions
function* deleteQuestion(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/questions/${action.payload}`);
  } catch (error) {
    // console.log('Error fetching Questions', error);
    alert("unable to delete Question from server");
  }
}

// function to get current Question
function* fetchQuestionDetail(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/detail/${action.payload}`);
    // const result = yield call(axios.get, '/question');
    yield put({ type: "SET_QUESTION_DETAIL", payload: response.data });
  } catch (error) {
    // console.log('Error fetching questions', error);
    alert("Unable to get detail from server");
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
    // console.log('Error fetching questions', error);
    alert("Unable to fetch current Question");
  }
}
function* acceptQuestion(action) {
  //Update the question
  try {
    yield Axios.put(`/api/question/accept/${action.payload.question_id}`);
    yield put({ type: "FETCH_QUESTIONS" });
  } catch (error) {
    alert("Unable to update Question on server", error);
  }
}

function* fetchQuestionAuthor(action) {
  try {
    const response = Axios.get(`/api/members/${action.payload}`);
    console.log(response.data);

    yield put({ type: "SET_QUESTION_AUTHOR", payload: response.data });
  } catch (error) {
    // alert("Unable to get question author on server", error);
  }
}

function* addQuestionLike(action) {
  try {
    yield Axios.put("api/likes/questions", action.payload);
  } catch (error) {
    alert("unable to add question like to server");
  }
}

function* questionsSaga() {
  yield takeEvery("FETCH_QUESTIONS", fetchQuestions);
  yield takeEvery("FETCH_QUESTION_DETAIL", fetchQuestionDetail);
  yield takeEvery("ACCEPT_QUESTION", acceptQuestion);
  yield takeEvery("FETCH_CURRENT_QUESTION", fetchCurrentQuestion);
  yield takeEvery("ADD_QUESTION", addQuestion);
  yield takeEvery("DELETE_QUESTION", deleteQuestion);
  yield takeEvery("FETCH_QUESTION_AUTHOR", fetchQuestionAuthor);
  yield takeEvery("ADD_QUESTION_LIKE", addQuestionLike);
}

export default questionsSaga;
