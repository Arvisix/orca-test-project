import { put, takeLatest } from "redux-saga/effects";

import firebase from "../../firebase";
import { JOBS_PAGE_LOADED } from "./actions";
import { SET_JOBS } from "./actions";

const ref = firebase.firestore().collection("processes");

function* fetchJobs(action) {
  const doc = yield ref.doc(action.payload).get();
  const jobs = doc.data().jobs;

  yield put({
    type: SET_JOBS,
    payload: jobs,
  });
}

export default function* processMiddleware() {
  yield takeLatest(JOBS_PAGE_LOADED, fetchJobs);
}
