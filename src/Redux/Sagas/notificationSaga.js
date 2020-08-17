import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// this is our function to get all notifications
function* fetchNotifications(action) {
  try {
    yield put({ type: "SET_NOTIFICATIONS", payload: [] });
    const response = yield Axios.get(`/api/notification/${action.payload}`);
    yield put({ type: "SET_NOTIFICATIONS", payload: response.data });
  } catch (error) {
    alert("Error fetching notifications", error);
  }
}

// function to add a notification
function* addNotifications(action) {
  try {
    yield Axios.post("/api/notification", action.payload);
    yield put({ type: "FETCH_NOTIFICATIONS", payload: action.payload });
  } catch (error) {
    alert("unable to add new notification to server");
  }
}

// function to delete a notification
function* deleteNotifications(action) {
  try {
    yield Axios.delete(`/api/notification/${action.payload.id}`);
  } catch (error) {
    alert("unable to delete Task Tag from server");
  }
}

function* taskTagsSaga() {
  yield takeEvery("FETCH_NOTIFICATIONS", fetchNotifications);
  yield takeEvery("ADD_NOTIFICATIONS", addNotifications);
  yield takeEvery("DELETE_NOTIFICATIONS", deleteNotifications);
}

export default taskTagsSaga;
