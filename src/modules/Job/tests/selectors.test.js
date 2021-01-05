import { getJobs } from "../selectors";

describe("getJobs", () => {
  it("should select the processes state", () => {
    const jobs = [
      {
        id: 1,
        name: "qwe",
      },
      {
        id: 2,
        name: "ewq",
      },
    ];
    const mockedState = {
      jobsReducer: { jobs },
    };
    expect(getJobs(mockedState)).toEqual(jobs);
  });
});
