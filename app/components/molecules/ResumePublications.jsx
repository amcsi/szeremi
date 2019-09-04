import PropTypes from 'prop-types';
import React from 'react';
import { withNamespaces } from 'react-i18next';
import ResumeSection from './ResumeSection';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import AfterTitleMonthRange from '../atoms/AfterTitleMonthRange';

class ResumePublications extends React.Component {
  render() {
    const { items, t } = this.props;
    if (!items || !items.length) {
      return null;
    }
    return (
      <div>
        {items.map(item => {
          const date = <AfterTitleMonthRange startDate={item.releaseDate} />;
          return (
            <ResumeSection
              key={item.name}
              sizeClassName={items.length > 1 ? 'col-md-6' : ''}
              title={item.name}
              titleUrl={item.website}
              afterTitle={date}
            >
              <ResumeLabelValue label={t('resumePage.publisher')} value={item.publisher} />
              <ResumeLabelValue label={t('resumePage.summary')} value={item.summary} />
            </ResumeSection>
          );
        })}
      </div>
    );
  }
}

ResumePublications.propTypes = {
  items: PropTypes.array,
  t: PropTypes.func.isRequired,
};

export default withNamespaces(['translation'])(ResumePublications);
