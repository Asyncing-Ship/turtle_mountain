import Axios from "axios";
import { put, takeEvery, delay, all } from "redux-saga/effects";
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
    alert("Error fetching Tasks", error);
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
  } catch (error) {
    // console.log('Error fetching Tasks', error);
    alert("unable to add new Task to server");
  }
}

// function to delete Tasks
function* deleteTask(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/tasks/${action.payload}`);
  } catch (error) {
    // console.log('Error fetching Tasks', error);
    alert("unable to delete Task from server");
  }
}

// function to get current Task
function* fetchTaskDetail(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/detail/${action.payload}`);
    // const result = yield call(axios.get, '/task');
    yield put({ type: "SET_TASK_DETAIL", payload: response.data });
  } catch (error) {
    // console.log('Error fetching tasks', error);
    alert("Unable to get detail from server");
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
    alert("Unable to fetch current Task");
  }
}

function* completeTask(action) {
  //Update the task
  try {
    yield Axios.put(`/api/task/complete/${action.payload.task_id}`);
    yield put({ type: "FETCH_TASKS" });
  } catch (error) {
    alert("Unable to update Task on server", error);
  }
}
function* acceptTask(action) {
  //Update the task
  try {
    yield Axios.put(`/api/task/accept/${action.payload.task_id}`);
    yield put({ type: "FETCH_TASKS" });
  } catch (error) {
    alert("Unable to update Task on server", error);
  }
}

function* fetchTaskAuthor(action) {
  try {
    const response = Axios.get(`/api/members/${action.payload}`);
    console.log(response.data);

    yield put({ type: "SET_TASK_AUTHOR", payload: response.data });
  } catch (error) {
    // alert("Unable to get task author on server", error);
  }
}

function* addTaskLike(action) {
  try {
    yield Axios.put("api/likes/tasks", action.payload);
  } catch (error) {
    alert("unable to add task like to server");
  }
}

function* tasksSaga() {
  yield takeEvery("FETCH_TASKS", fetchTasks);
  yield takeEvery("FETCH_TASK_DETAIL", fetchTaskDetail);
  yield takeEvery("ACCEPT_TASK", acceptTask);
  yield takeEvery("FETCH_CURRENT_TASK", fetchCurrentTask);
  yield takeEvery("ADD_TASK", addTask);
  yield takeEvery("DELETE_TASK", deleteTask);
  yield takeEvery("FETCH_TASK_AUTHOR", fetchTaskAuthor);
  yield takeEvery("ADD_TASK_LIKE", addTaskLike);
  yield takeEvery("COMPLETE_TASK", completeTask);
}

export default tasksSaga;
