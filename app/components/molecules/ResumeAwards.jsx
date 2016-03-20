import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import AfterTitleMonthRange from '../atoms/AfterTitleMonthRange';

class ResumeAwards extends React.Component {
  render() {
    const { items, t } = this.props;
    if (!items || !items.length) {
      return null;
    }

    return (
      <div className="clearfix">
        <h2>{t('resumePage.awards')}</h2>
        {items.map(item => {
          const date = <AfterTitleMonthRange startDate={item.date} />;
          return (
            <ResumeSection key={item.title} title={item.title} afterTitle={date}>
              <ResumeLabelValue label={t('resumePage.area')} value={item.area} />
              <ResumeLabelValue label={t('resumePage.awarder')} value={item.awarder} />
              <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
            </ResumeSection>
          );
        })}
      </div>
    );
  }
}

ResumeAwards.propTypes = {
  items: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeAwards);
