import PropTypes from 'prop-types';
import React from 'react';

import { translate } from 'react-i18next';
import { Link } from 'react-router';

import './HomePage.scss';

function HomePage({ t }) {
  return (
    <div className="text-center homepage">
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

export default translate(['translation'])(HomePage);
