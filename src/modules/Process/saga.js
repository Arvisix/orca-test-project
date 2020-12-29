import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router'

import { PROCESS_LINK_BUTTON_CLICKED, DELETE_PROCESS_BUTTON_CLICKED } from './actions';
import { processPath } from './constants'

export function* navigateToProcessPage(action) {
    yield put(push(processPath(action.payload)))
}

export function* deleteProcess(action) {
    yield put(push(processPath(action.payload)))
}

export default function* processMiddleware() {
    yield takeLatest(PROCESS_LINK_BUTTON_CLICKED, navigateToProcessPage);
    yield takeLatest(DELETE_PROCESS_BUTTON_CLICKED, navigateToProcessPage);
}