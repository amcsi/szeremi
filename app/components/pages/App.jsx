import React from 'react';
import i18next from '../../core/translator';
import routes from '../../core/routes';
import { Router } from 'react-router';
import history from '../../core/history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import { syncReduxAndRouter } from 'redux-simple-router';
import { I18nextProvider } from 'react-i18next';

const store = createStore(
  reducers,
  undefined,
  // Redux dev tools extension.
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() :
    undefined
);

/**
 * Subscribe to change the language
 */
store.subscribe(() => {
  const newLanguage = store.getState().currentLanguage;

  if (newLanguage) {
    i18next.changeLanguage(newLanguage);
  }
});

syncReduxAndRouter(history, store);

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-social');
require('font-awesome/css/font-awesome.min.css');

export default React.createClass({

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <Router history={history} routes={routes}/>
        </I18nextProvider>
      </Provider>
    );
  },
});
