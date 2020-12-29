export const JOBS_PAGE_LOADED = "JOBS_PAGE_LOADED";
export const SET_JOBS = "SET_JOBS";

export const jobsPageLoaded = (id) => ({
  type: JOBS_PAGE_LOADED,
  payload: id,
});
