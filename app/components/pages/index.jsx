import React from 'react';

import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Seo from '../../header/seo.jsx';
import './index.scss';

function HomePage({ t }) {
  return (
    <div className="has-text-centered homepage">
      <Seo title={t('home')} />
      <h1 className="title is-2">{t('homepage.title')}</h1>

      <Link to="/about">
        <span className="image" style={{ width: 263, height: 263 }}>
          <img
            src="/img/attila-szeremi-home.jpg"
            alt={t('homepage.photoAlt')}
            title={t('about')}
            className="photo is-rounded"
          />
        </span>
      </Link>
      <h2 className="title is-3" style={{ marginBottom: 20 }}>Attila Szeremi</h2>
    </div>
  );
}

export default withTranslation(['translation'])(HomePage);
