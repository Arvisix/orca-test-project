import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
};

export default configureStore;
