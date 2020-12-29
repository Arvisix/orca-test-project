import { all, fork } from "redux-saga/effects";

import processSaga from "./modules/Process/saga";
import jobSaga from "./modules/Job/saga";

export default function* root() {
  yield all([fork(processSaga)]);
  yield all([fork(jobSaga)]);
}
