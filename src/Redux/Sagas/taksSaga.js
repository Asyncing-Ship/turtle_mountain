import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// function to get Posts
function* fetchPosts(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get("/api/tasks");
    // const result = yield call(axios.get, '/task');
    yield put({ type: "SET_TASKS", payload: response.data });
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to get Post from server");
  }
}

// function to add Posts
function* addPost(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.task("/api/tasks", action.payload);
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to add new Post to server");
  }
}

// function to delete Posts
function* deletePost(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    yield Axios.delete(`/api/tasks/${action.payload}`);
  } catch (error) {
    // console.log('Error fetching Posts', error);
    alert("unable to delete Post from server");
  }
}

// function to get current Post
function* fetchPostDetail(action) {
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

// function to get current Post
function* fetchCurrentPost(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/tasks/${action.payload}`);
    // const result = yield call(axios.get, '/task');
    yield put({ type: "SET_CURRENT_TASK", payload: response.data });
  } catch (error) {
    // console.log('Error fetching tasks', error);
    alert("Unable to fetch current Post");
  }
}
function* updatePost(action) {
  //Update the task
  try {
    yield Axios.put(`/api/tasks/${action.payload.currentId}`, action.payload);
  } catch (error) {
    alert("Unable to update Post on server", error);
  }
}

function* fetchPostAuthor(action) {
  try {
    const response = Axios.get(`/api/members/${action.payload}`);
    console.log(response.data);

    yield put({ type: "SET_TASK_AUTHOR", payload: response.data });
  } catch (error) {
    // alert("Unable to get task author on server", error);
  }
}

function* addPostLike(action) {
  try {
    yield Axios.put("api/likes/tasks", action.payload);
  } catch (error) {
    alert("unable to add task like to server");
  }
}

function* tasksSaga() {
  yield takeEvery("FETCH_TASKS", fetchPosts);
  yield takeEvery("FETCH_TASK_DETAIL", fetchPostDetail);
  yield takeEvery("UPDATE_TASK", updatePost);
  yield takeEvery("FETCH_CURRENT_TASK", fetchCurrentPost);
  yield takeEvery("ADD_TASK", addPost);
  yield takeEvery("DELETE_TASK", deletePost);
  yield takeEvery("FETCH_TASK_AUTHOR", fetchPostAuthor);
  yield takeEvery("ADD_TASK_LIKE", addPostLike);
}

export default tasksSaga;
