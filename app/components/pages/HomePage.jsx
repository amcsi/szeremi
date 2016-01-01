import React from 'react';

import { translate } from 'react-i18next/lib/index';
import HomePageLanguageSelector from '../molecules/HomePageLanguageSelector';
import HeaderSection from '../organisms/HeaderSection';

export default translate([])(React.createClass({

  propTypes: {
    t: React.PropTypes.func.isRequired,
  },

  render() {
    const t = this.props.t;
    return (
      <div>
        <HeaderSection/>
        <main className="text-center">
          <h1>{t('homepage.title')}</h1>
          <HomePageLanguageSelector/>
        </main>
      </div>
    );
  },
}));
