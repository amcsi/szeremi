import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeListing from '../atoms/ResumeListing';
import AfterTitleMonthRange from '../atoms/AfterTitleMonthRange';

class ResumeEducation extends React.Component {
  render() {
    const { items, t } = this.props;
    if (!items || !items.length) {
      return null;
    }
    return (
      <div>
        {items.map(item => {
          const date = <AfterTitleMonthRange startDate={item.releaseDate} endDate={item.endDate} />;
          return (
            <div style={{ float: 'left' }} className={items.length > 1 ? 'col-md-6' : ''}>
              <ResumeSection key={item.institution} title={item.institution} afterTitle={date}>
                <ResumeLabelValue label={t('resumePage.area')} value={item.area} />
                <ResumeLabelValue label={t('resumePage.studyType')} value={item.studyType} />
                <ResumeLabelValue label={t('resumePage.gpa')} value={item.gpa} />
                <ResumeListing title={t('resumePage.courses')} items={item.courses} />
              </ResumeSection>
            </div>
          );
        })}
      </div>
    );
  }
}

ResumeEducation.propTypes = {
  items: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeEducation);
