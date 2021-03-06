import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import registrationSaga from "./registrationSaga";
import userSaga from "./userSaga";
import tasksSaga from "./tasksSaga";
import questionsSaga from "./questionsSaga";
import policySaga from "./policySaga";
import taskTagsSaga from "./taskTagsSaga";
import toastSaga from "./toastSaga";
import notisSaga from "./notificationSaga";

// https://redux-saga.js.org/

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    registrationSaga(),
    tasksSaga(),
    taskTagsSaga(),
    questionsSaga(),
    policySaga(),
    toastSaga(),
    notisSaga(),
  ]);
}
