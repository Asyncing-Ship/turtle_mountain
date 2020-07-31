import axios from "axios";
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
    const response = yield axios.get("/api/user", config);

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
    const response = yield axios.get("/api/members");

    yield put({ type: "SET_ALL_USERS", payload: response.data });
  } catch (error) {
    console.log("get all users request failed", error);
  }
}

function* userSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
  yield takeLatest("FETCH_ALL_USERS", fetchAllUsers);
}

export default userSaga;
