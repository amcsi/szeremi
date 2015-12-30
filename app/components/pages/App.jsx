import React from 'react';
import HomePage from './HomePage';
import Resume from './Resume';
import i18next from '../../core/translator';
import {Router, Route, IndexRoute} from 'react-router';
import history from '../../core/history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../core/reducers';
import { syncReduxAndRouter } from 'redux-simple-router';
import { I18nextProvider } from 'react-i18next/lib';

const store = createStore(reducers);

syncReduxAndRouter(history, store);

console.info(i18next.get);

export default React.createClass({

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <Router history={history}>
            <Route path="/">
              <IndexRoute component={HomePage} />
              <Route path="resume" component={Resume} />
            </Route>
          </Router>
        </I18nextProvider>
      </Provider>
    );
  },
});
