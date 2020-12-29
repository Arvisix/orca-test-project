import { SET_JOBS } from "./actions";

const initialState = {
  jobs: [],
};

const processReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return initialState;
  }
};

export default processReducer;
