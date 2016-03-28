import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import configureStore from './core/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-social');
require('font-awesome/css/font-awesome.min.css');

const store = configureStore(window.state);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<App store={store} history={history} />, document.getElementById('main'));
