import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// this is our function to get all the tags for a single task
function* fetchTaskTags(action) {
  try {
    yield put({ type: "SET_TASK_TAGS", payload: [] });
    const response = yield Axios.get(`/api/task_tag/${action.payload.task_id}`);
    console.log(`done with 'get'`, response);
    // const result = yield call(axios.get, '/tags');
    yield put({ type: "SET_TASK_TAGS", payload: response.data });
  } catch (error) {
    alert("Error fetching Task Tags", error);
  }
}

// function to add a Task tags
function* addTaskTags(action) {
  try {
    console.log("action", action);
    console.log("action.payload", action.payload);
    yield Axios.post("/api/task_tag", action.payload);
    yield put({ type: "FETCH_TASK_TAGS", payload: action.payload });
  } catch (error) {
    // console.log('Error fetching Task Tags', error);
    alert("unable to add new Task Tags to server");
  }
}

function* deleteTaskTags(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/task_tag/${action.payload}`);
    // yield put({ type: "FETCH_TASK_TAGS", payload: action.payload }); // How are we also going have
  } catch (error) {
    // task id in this saga?
    // console.log('Error deleting Task tag', error);
    alert("unable to delete Task Tag from server");
  }
}

function* taskTagsSaga() {
  yield takeEvery("FETCH_TASK_TAGS", fetchTaskTags);
  yield takeEvery("ADD_TASK_TAGS", addTaskTags);
  yield takeEvery("DELETE_TASK_TAGS", deleteTaskTags);
}

export default taskTagsSaga;
