import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import "./index.css";
import configureStore, { history } from "./configureStore";
import ProcessesPage from "./modules/Process/ProcessPage";
import JobsPage from "./modules/Job/Job.page";
import ModalProvider from "./components/Modal/ModalContext";
import ModalRoot from "./components/Modal/ModalRoot";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ModalProvider>
          <Switch>
            <Route exact path="/" component={ProcessesPage} />
            <Route path="/process/:id" component={JobsPage} />
          </Switch>
          <ModalRoot />
        </ModalProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
