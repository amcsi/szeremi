import React from 'react';
import HomePage from './HomePage';
import Resume from './Resume';
import t from '../../core/translator';
import {Router, Route, IndexRoute} from 'react-router';
import history from '../../core/history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../core/reducers';

const store = createStore(reducers);

export default React.createClass({

  onLanguageChange(languageCode) {
    t.changeLanguage(languageCode);
    this.setState({languageCode});
  },

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/">
            <IndexRoute component={HomePage} onLanguageChange={this.onLanguageChange} store={store}/>
            <Route path="resume" component={Resume} onLanguageChange={this.onLanguageChange} store={store}/>
          </Route>
        </Router>
      </Provider>
    );
  },
});
