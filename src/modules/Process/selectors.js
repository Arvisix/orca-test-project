import { createSelector } from "reselect";

export const getProcesses = (state) => state.processesReducer.processes;

const jobFailed = (job) => job.status === "error";
const jobSucceeded = (job) => job.status === "success";
const jobRunning = (job) => job.status === "running";

export const processesSelector = createSelector(getProcesses, (processes) =>
  processes.map((process) => {
    const processStatus =
      (process.jobs.every(jobFailed) && "error") ||
      (process.jobs.every(jobSucceeded) && "success") ||
      (process.jobs.some(jobRunning) && "running");

    return {
      ...process,
      processStatus,
    };
  })
);
