import React from 'react';
import { translate } from 'react-i18next';
import ResumeKeywords from '../atoms/ResumeKeywords';

class ResumeEtc extends React.Component {
  render() {
    const { languages, interests, references, t } = this.props;
    const sections = [];
    if (languages && languages.length) {
      sections.push(
        <div>
          <h3 style={{ textAlign: 'center' }}>{t('resumePage.languages')}</h3>
          <ul>
          {languages.map(({ language, fluency }, index) => (
            <li key={index}>
              <strong>{language}</strong>: {fluency}
            </li>
          ))}
          </ul>
        </div>
      );
    }
    if (interests && interests.length) {
      sections.push(
        <div>
          <h3 style={{ textAlign: 'center' }}>{t('resumePage.interests')}</h3>
          <ul>
            {interests.map(({ name, keywords }, index) => (
              <li key={index}>
                <strong>{name}</strong> <ResumeKeywords items={keywords} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (references && references.length) {
      sections.push(
        <div>
          <h3 style={{ textAlign: 'center' }}>{t('resumePage.references')}</h3>
          <ul>
            {references.map(({ name, reference }, index) => (
              <blockquote key={index}>
                <p>{name}</p>
                <footer>{reference}</footer>
              </blockquote>
            ))}
          </ul>
        </div>
      );
    }
    if (!sections.length) {
      return null;
    }
    return (
      <div className="clearfix">
        {sections.map((section, index) => (
          <div key={index} className="col-md-4">
            {section}
          </div>
        ))}
      </div>
    );
  }
}

ResumeEtc.propTypes = {
  languages: React.PropTypes.array,
  interests: React.PropTypes.array,
  references: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeEtc);
