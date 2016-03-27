import React from 'react';

import SelectableLanguage from '../atoms/SelectableLanguage';

export default React.createClass({
  render() {
    return (
      <div>
        <SelectableLanguage name="English" languageCode="en" countryCode="GB" />{' '}
        <SelectableLanguage name="Magyar" languageCode="hu" countryCode="HU" />{' '}
        <SelectableLanguage name="Español" languageCode="es" countryCode="ES" />{' '}
      </div>
    );
  },
});
