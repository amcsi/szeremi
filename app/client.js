import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import configureStore from './core/configureStore';
import { syncReduxAndRouter } from 'redux-simple-router';
import { browserHistory } from 'react-router';

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-social');
require('font-awesome/css/font-awesome.min.css');

const store = configureStore(window.state);

syncReduxAndRouter(browserHistory, store);

ReactDOM.render(<App store={store} />, document.getElementById('main'));
