import { expectSaga } from "redux-saga-test-plan";

import { randomizeProcess } from "../saga";
import { ADD_NEW_PROCESS } from '../actions'

describe("randomizeProcess Saga", () => {
  it("should dispatch ADD_NEW_PROCESS action", () => {
    expectSaga(randomizeProcess)
      .put({
        type: ADD_NEW_PROCESS,
      })
      .run();
    });
});
