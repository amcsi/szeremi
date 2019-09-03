import PropTypes from 'prop-types';
import React from 'react';
import { translate } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeHighlights from '../atoms/ResumeListing';
import AfterTitleMonthRange from '../atoms/AfterTitleMonthRange';

class ResumeWork extends React.Component {
  render() {
    const { t, items } = this.props;
    if (!items || !items.length) {
      return null;
    }
    return (
      <div>
        {items.map(item => {
          const date = <AfterTitleMonthRange startDate={item.releaseDate} endDate={item.endDate} />;
          return (
              <ResumeSection
                key={item.company}
                title={item.company}
                titleUrl={item.website}
                afterTitle={date}
              >
                <ResumeLabelValue label={t('resumePage.position')} value={item.position} />
                <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
                <ResumeHighlights title={t('resumePage.highlights')} items={item.highlights} />
              </ResumeSection>
          );
        })}
      </div>
    );
  }
}

ResumeWork.propTypes = {
  items: PropTypes.array,
  t: PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeWork);
