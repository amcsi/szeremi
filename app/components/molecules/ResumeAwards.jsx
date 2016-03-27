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
      <div>
        {items.map(item => {
          const date = <AfterTitleMonthRange startDate={item.date} />;
          return (
            <div style={{ float: 'left' }} className={items.length > 1 ? 'col-md-6' : ''}>
              <ResumeSection key={item.title} title={item.title} afterTitle={date}>
                <ResumeLabelValue label={t('resumePage.area')} value={item.area} />
                <ResumeLabelValue label={t('resumePage.awarder')} value={item.awarder} />
                <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
              </ResumeSection>
            </div>
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
