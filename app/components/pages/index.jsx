import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { withNamespaces } from 'react-i18next';
import { Link } from 'gatsby';

import './index.scss';

function HomePage({ t }) {
  return (
    <div className="text-center homepage">
      <Helmet>
        <title>{t('home')}</title>
      </Helmet>
      <h1>{t('homepage.title')}</h1>

      <Link to="/about">
        <img
          src="/img/attila-szeremi-home.jpg"
          width="263"
          height="263"
          alt={t('homepage.photoAlt')}
          title={t('about')}
          className="img-circle photo"
        />
      </Link>
      <h2 style={{ marginBottom: 20 }}>Attila Szeremi</h2>
    </div>
  );
}

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces(['translation'])(HomePage);
