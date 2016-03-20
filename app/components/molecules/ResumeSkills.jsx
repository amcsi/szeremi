import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeKeywords from '../atoms/ResumeKeywords';

class ResumeSkills extends React.Component {
  render() {
    const { items, t } = this.props;
    if (!items || !items.length) {
      return null;
    }

    return (
      <div className="clearfix">
        <h2>{t('resumePage.skills')}</h2>
        {items.map(item => (
            <ResumeSection key={item.name} title={item.name}>
              <ResumeLabelValue label={t('resumePage.level')} value={item.level} />
              <ResumeKeywords items={item.keywords} />
            </ResumeSection>
        ))}
      </div>
    );
  }
}

ResumeSkills.propTypes = {
  items: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeSkills);
