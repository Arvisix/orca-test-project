import { all, fork } from "redux-saga/effects";

import processSaga from "./modules/Process/saga";

export default function* root() {
  yield all([fork(processSaga)]);
}
