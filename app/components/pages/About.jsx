import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { translate } from 'react-i18next';
import './About.scss';

class About extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="about container" style={{ marginBottom: 10 }}>
        <div className="col-md-8">
          <blockquote className="blockquote-reverse">{t('aboutPage.quote')}</blockquote>

          <p>{t('aboutPage.p1')}</p>

          <p>{t('aboutPage.p2')}</p>

          <p>{t('aboutPage.p3')}</p>

          <p>{t('aboutPage.p4')}</p>
        </div>

        <div className="col-md-4">
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
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(About);
