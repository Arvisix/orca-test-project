import processReducer from "../reducer";
import { setProcesses } from "../actions";

describe("processReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      processes: [],
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(processReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the setProcesses action correctly", () => {
    const fixture = [{ id: "1", name: "qwe" }];
    const expectedResult = { processes: fixture };

    expect(processReducer(state, setProcesses(fixture))).toEqual(
      expectedResult
    );
  });
});
