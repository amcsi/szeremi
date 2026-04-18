import PropTypes from 'prop-types';
import React from 'react';
import { withNamespaces } from 'react-i18next';
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
      <div style={{ marginBottom: '1rem' }}>
        {items.map(item => {
          const date = <AfterTitleMonthRange startDate={item.releaseDate} endDate={item.endDate} />;
          return (
            <div className="card"
              key={item.company}
            >
              <ResumeSection
                title={item.company}
                titleUrl={item.website}
                afterTitle={date}
                sizeClassName="card-content"
              >
                <ResumeLabelValue label={t('resumePage.position')} value={item.position} />
                <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
                <div style={{ height: '1rem' }} />
                <ResumeHighlights title={t('resumePage.highlights')} items={item.highlights} />
              </ResumeSection>
            </div>
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

export default withNamespaces(['translation'])(ResumeWork);
