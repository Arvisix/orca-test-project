import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';
import globalReducer from './modules/App/redux/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
