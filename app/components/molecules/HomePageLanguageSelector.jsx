import React from 'react';
import SelectableLanguage from '../atoms/SelectableLanguage';
import languages from '../../constants/lang/langs';

class HomePageLanguageSelector extends React.Component {
  render() {
    return (
      <div>
        {languages.map(({ name, languageCode, countryCode }) => (
          <span key={name}>
            <SelectableLanguage name={name} languageCode={languageCode} countryCode={countryCode} />
            {' '}
          </span>
        ))}
      </div>
    );
  }
}

export default HomePageLanguageSelector;
