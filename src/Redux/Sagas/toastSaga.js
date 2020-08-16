import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
// function to get Tasks
function* addToast(action) {
  try {
    yield put({ type: "SET_TOAST", payload: action.payload });
    // yield put({ type: "ADD_TASK_TAGS", payload: action.payload });
  } catch (error) {
    alert("ERROR: Unable to send alert.");
  }
}

// function to get current Task
function* deleteToast(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield put({ type: "SET_TOAST_NULL" });
  } catch (error) {
    // console.log('Error fetching tasks', error);
    alert(
      "ERROR: Unable to set alert status to false. please refresh the page or contact an administrator."
    );
  }
}
function* tasksSaga() {
  yield takeEvery("ADD_TOAST", addToast);
  yield takeEvery("DELETE_TOAST", deleteToast);
}
export default tasksSaga;
