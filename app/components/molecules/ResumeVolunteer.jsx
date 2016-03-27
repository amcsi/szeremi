import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeListing from '../atoms/ResumeListing';
import AfterTitleMonthRange from '../atoms/AfterTitleMonthRange';

class ResumeVolunteer extends React.Component {
  render() {
    const { t, items } = this.props;
    if (!items || !items.length) {
      return null;
    }

    return (
      <div style={{ float: 'left' }}>
        {items.map(item => {
          const date = <AfterTitleMonthRange startDate={item.releaseDate} endDate={item.endDate} />;
          return (
            <div style={{ float: 'left' }} className={items.length > 1 ? 'col-md-6' : ''}>
              <ResumeSection key={item.organization} title={item.organization} titleUrl={item.website} afterTitle={date}>
                <ResumeLabelValue label={t('resumePage.position')} value={item.position} />
                <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
                <ResumeListing title={t('resumePage.highlights')} items={item.highlights} />
              </ResumeSection>
            </div>
          );
        })}
      </div>
    );
  }
}

ResumeVolunteer.propTypes = {
  items: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeVolunteer);
