import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';
import ResumeHighlights from '../atoms/ResumeListing';
import moment from 'moment';

class ResumeWork extends React.Component {
  render() {
    const { t, works } = this.props;
    if (!works || !works.length) {
      return null;
    }
    return (
      <div className="clearfix">
        <h2>{t('resumePage.work')}</h2>
        {works.map(work => {
          const dateFormat = t('dateFormats.date');
          const startDateFormatted = moment(work.releaseDate).format(dateFormat);
          const endDateFormatted = moment(work.endDate).format(dateFormat);
          return (
          <ResumeSection key={work.company} title={work.company}>
            <ResumeLabelValue label={t('resumePage.position')} value={work.position} />
            <ResumeLabelUrl label={t('resumePage.website')} url={work.website} />
            <ResumeLabelValue label={t('resumePage.releaseDate')} value={startDateFormatted} />
            <ResumeLabelValue label={t('resumePage.endDate')} value={endDateFormatted} />
            <ResumeLabelValue label={t('resumePage.summary')} value={work.summary} />
            <ResumeHighlights title={t('resumePage.highlights')} items={work.highlights} />
          </ResumeSection>
          );
        })}
      </div>
    );
  }
}

ResumeWork.propTypes = {
  works: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeWork);
