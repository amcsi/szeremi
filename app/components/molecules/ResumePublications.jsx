import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';
import moment from 'moment';

class ResumePublications extends React.Component {
  render() {
    const { items, t } = this.props;
    if (!items || !items.length) {
      return null;
    }

    return (
      <div className="clearfix">
        <h2>{t('resumePage.publications')}</h2>
        {items.map(item => {
          const dateFormat = t('dateFormats.date');
          const dateFormatted = moment(item.releaseDate).format(dateFormat);
          return (
            <ResumeSection key={item.name} title={item.name}>
              <ResumeLabelValue label={t('resumePage.publisher')} value={item.publisher} />
              <ResumeLabelValue label={t('resumePage.date')} value={dateFormatted} />
              <ResumeLabelUrl label={t('resumePage.website')} url={item.website} />
              <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
            </ResumeSection>
          );
        })}
      </div>
    );
  }
}

ResumePublications.propTypes = {
  items: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumePublications);
