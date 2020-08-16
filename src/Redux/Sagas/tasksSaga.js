import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
// function to get Tasks
function* fetchTasks(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  console.log("In fetch tasks");
  try {
    const response = yield Axios.get("/api/task");
    yield put({ type: "SET_TASKS", payload: response.data });
    // yield put({ type: "ADD_TASK_TAGS", payload: action.payload });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: { status: "error", message: "failed to fetch tasks" },
    });
  }
}

// function to add Tasks
function* addTask(action) {
  try {
    console.log("add task", action.payload);
    const response = yield Axios.post("/api/task", {
      title: action.payload.title,
      content: action.payload.content,
    });
    let myId = response.data.rows[0].id;
    let item = action.payload.user_ids;
    yield put({
      type: "ADD_TASK_TAGS",
      payload: { user_ids: item, task_id: myId },
    });
    yield put({ type: "FETCH_TASKS" });
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "succeessfully added task" },
    });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: {
        status: "error",
        message: "failed to add your task",
      },
    });
  }
}
// function to get current Task
function* fetchCurrentTask(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/tasks/${action.payload}`);
    // const result = yield call(axios.get, '/task');
    yield put({ type: "SET_CURRENT_TASK", payload: response.data });
  } catch (error) {
    // console.log('Error fetching tasks', error);
    yield put({
      type: "ADD_TOAST",
      payload: { status: "error", message: "failed to fetch current task" },
    });
  }
}

function* completeTask(action) {
  //Update the task
  try {
    yield Axios.put(`/api/task/complete/${action.payload.task_id}`);
    yield put({ type: "FETCH_TASKS" });
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "task completed" },
    });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: { status: "error", message: "failed to complete task" },
    });
  }
}
function* acceptTask(action) {
  //Update the task
  try {
    yield Axios.put(`/api/task/accept/${action.payload.task_id}`);
    yield put({ type: "FETCH_TASKS" });
    yield put({
      type: "ADD_TOAST",
      payload: { status: "success", message: "task accepted" },
    });
  } catch (error) {
    yield put({
      type: "ADD_TOAST",
      payload: { status: "error", message: "failed to accept task" },
    });
  }
}

function* tasksSaga() {
  yield takeEvery("FETCH_TASKS", fetchTasks);
  yield takeEvery("ACCEPT_TASK", acceptTask);
  yield takeEvery("FETCH_CURRENT_TASK", fetchCurrentTask);
  yield takeEvery("ADD_TASK", addTask);
  yield takeEvery("COMPLETE_TASK", completeTask);
}

export default tasksSaga;
