import React from 'react';
import { translate } from 'react-i18next';
import ResumeKeywords from '../atoms/ResumeKeywords';

class ResumeEtc extends React.Component {
  render() {
    const { languages, interests, references, t } = this.props;
    const sections = [];
    if (languages && languages.length) {
      sections.push({
        title: t('resumePage.languages'),
        content: (
          <div>
            <ul>
              {languages.map(({ language, fluency }, index) => (
                <li key={index}>
                  <strong>{language}</strong>: {fluency}
                </li>
              ))}
            </ul>
          </div>
        ),
      });
    }
    if (interests && interests.length) {
      sections.push({
        title: t('resumePage.interests'),
        content: (
          <div>
            <ul>
              {interests.map(({ name, keywords }, index) => (
                <li key={index}>
                  <strong>{name}</strong> <ResumeKeywords items={keywords} />
                </li>
              ))}
            </ul>
          </div>
        ),
      });
    }
    if (references && references.length) {
      sections.push({
        title: t('resumePage.references'),
        content: (
          <div>
            <ul>
              {references.map(({ name, reference }, index) => (
                <blockquote key={index}>
                  <p>{name}</p>
                  <footer>{reference}</footer>
                </blockquote>
              ))}
            </ul>
          </div>
        ),
      });
    }
    if (!sections.length) {
      return null;
    }
    return (
      <div className="clearfix">
        <h2>{t('resumePage.other')}</h2>
        {sections.map(({ title, content }, index) => (
          <div key={index} className="col-md-4">
            <h3>{title}</h3>
            {content}
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
