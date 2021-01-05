import { put, takeLatest, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { v4 as uuid } from "uuid";
import faker from "faker";

import firebase from "../../firebase";
import {
  DELETE_PROCESS_BUTTON_CLICKED,
  PROCESSES_PAGE_LOADED,
  ADD_NEW_PROCESS,
  ADD_NEW_PROCESS_BUTTON_CLICKED,
  setProcesses,
} from "./actions";

const ref = firebase.firestore().collection("processes");

export function* deleteProcess(action) {
  yield ref.doc(action.payload).delete();
}

export function* syncProcesses() {
  const channel = eventChannel((emit) => ref.onSnapshot(emit));

  try {
    while (true) {
      const data = yield take(channel);
      const processes = data.docs.map((doc) => doc.data());

      yield put(setProcesses(processes));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* addProcess({ payload }) {
  yield ref.doc(payload.id).set(payload);
}

export function* randomizeProcess() {
  const id = uuid();
  const name = faker.lorem.word();
  const startTime = Date.now();
  const jobsCount = Math.floor(Math.random() * 10) + 1;
  const arrayOfJobStatuses = ["success", "error", "running"];
  const jobs = Array.from(Array(jobsCount)).map((job) => ({
    id: uuid(),
    name: faker.lorem.word(),
    status:
      arrayOfJobStatuses[Math.floor(Math.random() * arrayOfJobStatuses.length)],
    processId: id,
  }));

  yield put({
    type: ADD_NEW_PROCESS,
    payload: {
      id,
      jobsCount,
      name,
      startTime,
      jobs,
    },
  });
}

export default function* processMiddleware() {
  yield takeLatest(DELETE_PROCESS_BUTTON_CLICKED, deleteProcess);
  yield takeLatest(ADD_NEW_PROCESS_BUTTON_CLICKED, randomizeProcess);
  yield takeLatest(PROCESSES_PAGE_LOADED, syncProcesses);
  yield takeLatest(ADD_NEW_PROCESS, addProcess);
}
