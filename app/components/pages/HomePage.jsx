import React from 'react';

import { translate } from 'react-i18next/lib/index';
import HomePageLanguageSelector from '../molecules/HomePageLanguageSelector';
import HeaderSection from '../organisms/HeaderSection';

function HomePage({t}) {
  return (
    <div>
      <HeaderSection/>
      <main className="text-center">
        <h1>{t('homepage.title')}</h1>
        <HomePageLanguageSelector/>
      </main>
    </div>
  );
}

export default translate(['translation'])(HomePage);
