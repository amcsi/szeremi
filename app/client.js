import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import configureStore from './core/configureStore';
import { syncReduxAndRouter } from 'redux-simple-router';
import history from './core/history';

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-social');
require('font-awesome/css/font-awesome.min.css');

const store = configureStore(window.state);

syncReduxAndRouter(history, store);

ReactDOM.render(<App store={store} />, document.getElementById('main'));
