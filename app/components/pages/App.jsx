import React from 'react';
import HomePage from './HomePage';
import Resume from './Resume';
import t from '../../core/translator';
import {Router, Route, IndexRoute} from 'react-router';
import history from '../../core/history';

export default React.createClass({

  onLanguageChange(languageCode) {
    t.changeLanguage(languageCode);
    this.setState({languageCode});
  },

  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/">
            <IndexRoute component={HomePage} onLanguageChange={this.onLanguageChange}/>
            <Route path="resume" component={Resume} onLanguageChange={this.onLanguageChange}/>
          </Route>
        </Router>
      </div>
    );
  },
});
