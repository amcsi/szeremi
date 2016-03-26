import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { syncReduxAndRouter } from 'redux-simple-router';
import history from './core/history';

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-social');
require('font-awesome/css/font-awesome.min.css');

// Redux dev tools extension.
const enhancer =
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() :
    undefined;
const store = createStore(reducers, window.state, enhancer);

syncReduxAndRouter(history, store);

ReactDOM.render(<App store={store} />, document.getElementById('main'));
