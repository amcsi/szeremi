import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';
import AfterTitleMonthRange from '../atoms/AfterTitleMonthRange';

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
          const date = <AfterTitleMonthRange startDate={item.releaseDate} />;
          return (
            <ResumeSection key={item.name} title={item.name} afterTitle={date}>
              <ResumeLabelValue label={t('resumePage.publisher')} value={item.publisher} />
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
