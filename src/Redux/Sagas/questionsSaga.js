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
    alert("Error fetching Question Responses", error);
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
    alert("unable to add new Question response to server");
  }
}

// function to add a Question Response
function* addQuestionResponse(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.post("/api/question_response", action.payload);
    yield put({ type: "FETCH_QUESTION_RESPONSES", payload: action.payload });
  } catch (error) {
    // console.log('Error fetching Question Response', error);
    alert("unable to add new Question Response to server");
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

// function to delete a Questions response
function* deleteQuestionResponse(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/question_response/${action.payload}`);
  } catch (error) {
    // console.log('Error fetching Questions', error);
    alert("unable to delete Question Response from server");
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

// function* answerQuestion(action) {
//   //Update the question
//   try {
//     yield Axios.put(
//       `/api/question/${action.payload.id}`,
//       action.payload.answer
//     );
//     yield put({ type: "FETCH_QUESTIONS" });
//   } catch (error) {
//     alert("Unable to update Question on server", error);
//   }
// }

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

function* markAsAnswer(action) {
  //update the question as answered
  try {
    yield Axios.put(`/api/question/answer/${action.payload.question_id}`);
    yield Axios.put(`/api/question_response/verify/${action.payload.id}`);
    yield put({ type: "FETCH_QUESTIONS" });
    yield put({
      type: "FETCH_QUESTION_RESPONSES",
      payload: action.payload.question_id,
    });
  } catch (error) {
    alert("Unable to update question as answered", error);
  }
}

function* verifyQuestionResponse(action) {
  //Update the question response as verified
  try {
    yield Axios.put(`/api/question_response/verify/${action.payload.id}`);
  } catch (error) {
    alert("Unable to update Question on server", error);
  }
}

function* questionsSaga() {
  yield takeEvery("FETCH_QUESTIONS", fetchQuestions);
  yield takeEvery("FETCH_QUESTION_DETAIL", fetchQuestionDetail);
  yield takeEvery("FETCH_CURRENT_QUESTION", fetchCurrentQuestion);
  yield takeEvery("ADD_QUESTION", addQuestion);
  yield takeEvery("DELETE_QUESTION", deleteQuestion);
  yield takeEvery("FETCH_QUESTION_AUTHOR", fetchQuestionAuthor);
  yield takeEvery("ADD_QUESTION_LIKE", addQuestionLike);
  yield takeEvery("MARK_AS_ANSWER", markAsAnswer); // only admin can
  // QUESTION RESPONSES BELOW
  yield takeEvery("FETCH_QUESTION_RESPONSES", fetchQuestionResponses);
  yield takeEvery("ADD_QUESTION_RESPONSE", addQuestionResponse);
  yield takeEvery("DELETE_QUESTION_RESPONSE", deleteQuestionResponse);
  yield takeEvery("VERIFY_QUESTION_RESPONSE", verifyQuestionResponse);
}

export default questionsSaga;
