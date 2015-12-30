import React from 'react';

import SelectableLanguage from '../atoms/SelectableLanguage';

export default React.createClass({
  render() {
    return (
      <div>
        <SelectableLanguage name="English" code="en"/>
        <SelectableLanguage name="Magyar" code="hu"/>
        <SelectableLanguage name="Español" code="es"/>
      </div>
    );
  },
});
