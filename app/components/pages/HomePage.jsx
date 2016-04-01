import React from 'react';

import { translate } from 'react-i18next';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const HomePage = React.createClass({

  propTypes: {
    t: React.PropTypes.func.isRequired,
  },

  render() {
    const { t } = this.props;

    return (
      <div>
        <Header />
        <main className="text-center">
          <h1>{t('homepage.title')}</h1>
          <img src="/img/attila-szeremi-home.jpg"
            width="263"
            height="263"
            style={{
              marginBottom: 10,
              border: '1px solid gray',
              boxShadow: '0 0 4gpx rgba(0, 0, 0, 1)',
            }}
            alt={t('homepage.photoAlt')}
            className="img-circle"
          />
          <h2 style={{ marginBottom: 20 }}>Attila Szeremi</h2>
        </main>
        <Footer />
      </div>
    );
  },
});

export default translate(['translation'])(HomePage);
