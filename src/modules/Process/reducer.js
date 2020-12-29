import { SET_PROCESSES } from "./actions";

const initialState = {
  processes: [],
};

const processReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROCESSES:
      return {
        ...state,
        processes: action.payload,
      };
    default:
      return initialState;
  }
};

export default processReducer;
