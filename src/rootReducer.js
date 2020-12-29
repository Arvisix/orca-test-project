import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import processes from './modules/Process/reducer'
import jobs from './modules/Job/reducer'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    processesReducer: processes,
    jobsReducer: jobs,
  });

export default rootReducer;
