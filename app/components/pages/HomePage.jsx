import React from 'react';

import t from '../../core/translator';
import HomePageLanguageSelector from '../molecules/HomePageLanguageSelector';
import HeaderSection from '../organisms/HeaderSection';

require('./HomePage.scss');

export default React.createClass({

  propTypes: {
    route: React.PropTypes.shape({
      onLanguageChange: React.PropTypes.func.isRequired,
      store: React.PropTypes.object.isRequired,
    }),
  },

  render() {
    console.info('props', this.props);
    return (
      <div>
        <HeaderSection/>
        <main className="text-center">
          <h1>{t.t('homepage.title')}</h1>
          <HomePageLanguageSelector onClick={this.props.route.onLanguageChange} />
        </main>
      </div>
    );
  },
});
