import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import './index.css';
import configureStore from './configureStore';
import history from './utils/history';
import ProcessesPage from './modules/Process/Process.page'
import JobsPage from './modules/Job/Job.page'
import ModalProvider from './components/Modal/ModalContext'
import ModalRoot from './components/Modal/ModalRoot'

const store = configureStore({}, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ModalProvider>
          <ModalRoot />
          <Switch>
            <Route exact path="/" component={ProcessesPage} />
            <Route path="/process" component={JobsPage} />
          </Switch>
        </ModalProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
