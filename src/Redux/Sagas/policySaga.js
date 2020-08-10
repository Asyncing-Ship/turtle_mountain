import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchPolicies() {
  const response = yield Axios.get("/api/policy");
  yield put({ type: 'SET_POLICIES', payload: response.data });
}

function* uploadPolicy(action) {
  yield Axios.post("/api/policy/new", action.payload);
  yield put({ type: 'FETCH_POLICIES' });
}

function* policySaga() {
  yield takeEvery('FETCH_POLICIES', fetchPolicies);
  yield takeEvery('UPLOAD_POLICY', uploadPolicy);
}

export default policySaga;