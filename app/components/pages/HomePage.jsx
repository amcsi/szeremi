import React from 'react';

import t from '../../core/translator';
import HomePageLanguageSelector from '../molecules/HomePageLanguageSelector';

require('./HomePage.scss');

export default React.createClass({

  propTypes: {
    route: React.PropTypes.shape({
      onLanguageChange: React.PropTypes.func.isRequired,
    }),
  },

  onLanguageChange(code, evt) {
    this.props.route.onLanguageChange(code, evt);
  },

  render() {
    return (
      <div>
        <main className="text-center">
          <h1>{t.t('homepage.title')}</h1>

          <HomePageLanguageSelector onClick={this.onLanguageChange} />
        </main>
      </div>
    );
  },
});
