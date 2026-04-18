import PropTypes from 'prop-types';
import React from 'react';
import { withNamespaces } from 'react-i18next';
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
            <ResumeSection
              key={item.organization}
              sizeClassName={items.length > 1 ? 'column is-half' : ''}
              title={item.organization}
              titleUrl={item.website}
              afterTitle={date}
            >
              <ResumeLabelValue label={t('resumePage.position')} value={item.position} />
              <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
              <ResumeListing title={t('resumePage.highlights')} items={item.highlights} />
            </ResumeSection>
          );
        })}
      </div>
    );
  }
}

ResumeVolunteer.propTypes = {
  items: PropTypes.array,
  t: PropTypes.func.isRequired,
};

export default withNamespaces(['translation'])(ResumeVolunteer);
