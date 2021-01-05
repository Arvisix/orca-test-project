import jobsReducer from "../reducer";
import { setJobs } from "../actions";

describe("processReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      jobs: [],
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(jobsReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the setProcesses action correctly", () => {
    const fixture = [{ id: "1", name: "qwe" }];
    const expectedResult = { jobs: fixture };

    expect(jobsReducer(state, setJobs(fixture))).toEqual(
      expectedResult
    );
  });
});
