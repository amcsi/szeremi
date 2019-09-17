import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import './about.scss';

class About extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="about container columns content" style={{ marginBottom: 10 }}>
        <Helmet>
          <title>{t('about')}</title>
        </Helmet>
        <div className="column is-two-thirds">
          <blockquote className="blockquote-reverse">{t('aboutPage.quote')}</blockquote>

          <p>{t('aboutPage.p1')}</p>

          <p>{t('aboutPage.p2')}</p>

          <p>{t('aboutPage.p3')}</p>

          <p>{t('aboutPage.p4')}</p>
        </div>

        <div className="column is-one-third">
          <img className="photo"
            src="/img/attila-szeremi-about.jpg"
            alt="Photo of Attila Szeremi"
            width="350"
          />
        </div>
      </div>
    );
  }
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces(['translation'])(About);
