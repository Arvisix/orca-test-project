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

const store = configureStore({}, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={ProcessesPage} />
          <Route path="/process" component={JobsPage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
