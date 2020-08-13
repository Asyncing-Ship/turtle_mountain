import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// // function to get Question Tags
// function* fetchQuestionTags(action) {
//   try {
//     const response = yield Axios.get("/api/question_tag");
//     yield put({ type: "SET_QUESTION_TAGS", payload: response.data });
//   } catch (error) {
//     alert("Error fetching Questions", error);
//   }
// }

// this is our function to get all the tags for a single question
function* fetchQuestionTags(action) {
  try {
    yield put({ type: "SET_QUESTION_TAGS", payload: [] });
    const response = yield Axios.get(
      `/api/question_tag/${action.payload.question_id}`
    );
    console.log(`done with 'get'`, response);
    // const result = yield call(axios.get, '/tags');
    yield put({ type: "SET_QUESTION_TAGS", payload: response.data });
  } catch (error) {
    alert("Error fetching Question Tags", error);
  }
}

// function to add a Question Response
function* addQuestionTags(action) {
  try {
    yield Axios.post("/api/question_tag", action.payload);
    yield put({ type: "FETCH_QUESTION_TAGS", payload: action.payload });
  } catch (error) {
    // console.log('Error fetching Question Tags', error);
    alert("unable to add new Question Tags to server");
  }
}

function* deleteQuestionTags(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/question_tag/${action.payload}`);
    // yield put({ type: "FETCH_QUESTION_TAGS", payload: action.payload }); // How are we also going have
  } catch (error) {
    // question id in this saga?
    // console.log('Error deleting Question tag', error);
    alert("unable to delete Question Tag from server");
  }
}

function* questionTagsSaga() {
  yield takeEvery("FETCH_QUESTION_TAGS", fetchQuestionTags);
  yield takeEvery("ADD_QUESTION_TAGS", addQuestionTags);
  yield takeEvery("DELETE_QUESTION_TAGS", deleteQuestionTags);
}

export default questionTagsSaga;
