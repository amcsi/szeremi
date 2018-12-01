import React from 'react';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';
import Address from '../atoms/Address';
import ResumeSection from './ResumeSection';
import { translate } from 'react-i18next';

class ResumeBasics extends React.Component {
  render() {
    const { basics, t } = this.props;
    const addressComponent = basics.location ? (
      <ResumeSection title={t('resumePage.address')}>
        <Address location={basics.location} />
      </ResumeSection>
    ) : null;
    const email = basics.email ? <a href={`mailto:${basics.email}`}>{basics.email}</a> : null;
    return (
      <div>
        <h3>
          <ResumeLabelValue label={t('resumePage.name')} value={basics.name} />
        </h3>
        <ResumeLabelValue label={t('resumePage.email')} value={email} />
        <ResumeLabelValue label={t('resumePage.telephone')} value={basics.telephone} />
        <ResumeLabelUrl label={t('resumePage.website')} url={basics.website} />
        <ResumeLabelValue label={t('resumePage.summary')} value={basics.summary} />

        {addressComponent}
      </div>
    );
  }
}

ResumeBasics.propTypes = {
  basics: React.PropTypes.object.isRequired,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeBasics);
