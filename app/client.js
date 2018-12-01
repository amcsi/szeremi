import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import configureStore from './core/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import ReactBreakpoints from 'react-breakpoints';

const breakpoints = {
  xs: 480,
  sm: 768,
};

const store = configureStore(window.state);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <App store={store} history={history} />
  </ReactBreakpoints>,
  document.getElementById('main')
);
