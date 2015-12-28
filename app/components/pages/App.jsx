import React from 'react';
import HomePage from './HomePage';
import t from '../../core/translator';

export default React.createClass({

  onLanguageChange(languageCode) {
    t.changeLanguage(languageCode);
    this.setState({languageCode});
  },

  render() {
    return (
      <div>
        <HomePage onLanguageChange={this.onLanguageChange} />
      </div>
    );
  },
});
