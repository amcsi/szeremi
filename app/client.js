import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import configureStore from './core/configureStore';

const store = configureStore(window.state);

ReactDOM.render(<App store={store} />, document.getElementById('main'));
