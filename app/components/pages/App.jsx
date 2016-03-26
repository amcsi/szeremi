import React from 'react';
import routes from '../../core/routes';
import { Router } from 'react-router';
import history from '../../core/history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import { syncReduxAndRouter } from 'redux-simple-router';
import TranslatorContext from './TranslatorContext';

const store = createStore(
  reducers,
  undefined,
  // Redux dev tools extension.
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() :
    undefined
);

syncReduxAndRouter(history, store);

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-social');
require('font-awesome/css/font-awesome.min.css');

export default React.createClass({

  render() {
    return (
      <Provider store={store}>
        <TranslatorContext>
          <Router history={history} routes={routes}/>
        </TranslatorContext>
      </Provider>
    );
  },
});
