import React from 'react';

import t from '../../core/translator';

export default React.createClass({
  render() {
    return (
      <div>
        <main>
          <h1>{t.t('homepage.title')}</h1>
        </main>
      </div>
    );
  },
});
