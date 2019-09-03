import PropTypes from 'prop-types';
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
            <ResumeSection
              key={item.title}
              sizeClassName={items.length > 1 ? 'col-md-6' : ''}
              title={item.title}
              afterTitle={date}
            >
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
  items: PropTypes.array,
  t: PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeAwards);
