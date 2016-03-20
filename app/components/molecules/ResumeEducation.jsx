import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeListing from '../atoms/ResumeListing';
import moment from 'moment';

class ResumeEducation extends React.Component {
  render() {
    const { items, t } = this.props;
    if (!items || !items.length) {
      return null;
    }
    return (
      <div className="clearfix">
        <h2>{t('resumePage.education')}</h2>
        {items.map(item => {
          const dateFormat = t('dateFormats.date');
          const startDateFormatted = moment(item.startDate).format(dateFormat);
          const endDateFormatted = moment(item.endDate).format(dateFormat);
          return (
            <ResumeSection key={item.institution} title={item.institution}>
              <ResumeLabelValue label={t('resumePage.area')} value={item.area} />
              <ResumeLabelValue label={t('resumePage.studyType')} value={item.studyType} />
              <ResumeLabelValue label={t('resumePage.startDate')} value={startDateFormatted} />
              <ResumeLabelValue label={t('resumePage.endDate')} value={endDateFormatted} />
              <ResumeLabelValue label={t('resumePage.gpa')} value={item.gpa} />
              <ResumeListing title={t('resumePage.courses')} items={item.courses} />
            </ResumeSection>
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
