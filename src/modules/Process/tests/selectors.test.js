import { getProcesses, processesSelector } from "../selectors";

describe("getProcesses", () => {
  it("should select the processes state", () => {
    const processes = [
      {
        id: 1,
        name: "qwe",
        jobs: [],
      },
      {
        id: 2,
        name: "ewq",
        jobs: [],
      },
    ];
    const mockedState = {
      processesReducer: { processes },
    };
    expect(getProcesses(mockedState)).toEqual(processes);
  });
});

describe("processesSelector", () => {
  it("should add processStatus", () => {
    const processes1 = {
      id: "1",
      name: "qwe",
      jobs: [
        {
          id: "1",
          status: "success",
        },
      ],
    };
    const processes2 = {
      id: "2",
      name: "ewq",
      jobs: [
        {
          id: "2",
          status: "error",
        },
      ],
    };
    const mockedState = {
      processesReducer: {
        processes: [processes1, processes2],
      },
    };

    const expected = [
      { ...processes1, processStatus: "success" },
      { ...processes2, processStatus: "error" },
    ];
    expect(processesSelector(mockedState)).toEqual(expected);
  });
});
