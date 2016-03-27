import React from 'react';

import { translate } from 'react-i18next';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const HomePage = React.createClass({

  propTypes: {
    t: React.PropTypes.func.isRequired,
  },

  render() {
    const {t} = this.props;

    return (
      <div>
        <Header/>
        <main className="text-center">
          <h1>{t('homepage.title')}</h1>
        </main>
        <Footer />
      </div>
    );
  },
});

export default translate(['translation'])(HomePage);
