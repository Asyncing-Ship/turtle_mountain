import Axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield Axios.get("/api/user", config);

    // now that the session has given us a user object
    // with an id and email set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: "SET_USER", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* fetchAllUsers() {
  try {
    const response = yield Axios.get("/api/user/all");

    yield put({ type: "SET_ALL_USERS", payload: response.data });
  } catch (error) {
    console.log("get all users request failed", error);
  }
}

// function to delete user
function* deleteUser(action) {
  try {
    yield Axios.delete(`/api/user/${action.payload}`);
    yield put({ type: "FETCH_ALL_USERS" });
  } catch (error) {
    alert("unable to delete user from server");
  }
}

function* approveUser(action) {
  //Update the question response as verified
  try {
    yield Axios.put(`/api/user/approve/${action.payload}`);
    yield put({ type: "FETCH_ALL_USERS" });
  } catch (error) {
    alert("Unable to approve user on server", error);
  }
}

function* promoteUser(action) {
  //Update the question response as verified
  try {
    yield Axios.put(`/api/user/promote/${action.payload}`);
    yield put({ type: "FETCH_ALL_USERS" });
  } catch (error) {
    alert("Unable to promote user on server", error);
  }
}

function* userSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("FETCH_ALL_USERS", fetchAllUsers);
  yield takeLatest("DELETE_USER", deleteUser);
  yield takeLatest("APPROVE_USER", approveUser);
  yield takeLatest("PROMOTE_USER", promoteUser);
}

export default userSaga;
