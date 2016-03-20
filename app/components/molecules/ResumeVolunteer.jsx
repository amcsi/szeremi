import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';
import ResumeListing from '../atoms/ResumeListing';
import moment from 'moment';

class ResumeVolunteer extends React.Component {
  render() {
    const { t, volunteers } = this.props;
    if (!volunteers || !volunteers.length) {
      return null;
    }
    return (
      <div className="clearfix">
        <h2>{t('resumePage.volunteer')}</h2>
        {volunteers.map(volunteer => {
          const dateFormat = t('dateFormats.date');
          const startDateFormatted = moment(volunteer.startDate).format(dateFormat);
          const endDateFormatted = moment(volunteer.endDate).format(dateFormat);
          return (
          <ResumeSection key={volunteer.organization} title={volunteer.organization}>
            <ResumeLabelValue label={t('resumePage.position')} value={volunteer.position} />
            <ResumeLabelUrl label={t('resumePage.website')} url={volunteer.website} />
            <ResumeLabelValue label={t('resumePage.startDate')} value={startDateFormatted} />
            <ResumeLabelValue label={t('resumePage.endDate')} value={endDateFormatted} />
            <ResumeLabelValue label={t('resumePage.summary')} value={volunteer.summary} />
            <ResumeListing title={t('resumePage.highlights')} items={volunteer.highlights} />
          </ResumeSection>
          );
        })}
      </div>
    );
  }
}

ResumeVolunteer.propTypes = {
  volunteers: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeVolunteer);
