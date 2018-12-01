import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import configureStore from './core/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const store = configureStore(window.state);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<App store={store} history={history} />, document.getElementById('main'));
