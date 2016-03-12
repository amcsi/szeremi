import React from 'react';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';
import Address from '../atoms/Address';
import ResumeSection from './ResumeSection';
import { translate } from 'react-i18next';

class ResumeBasics extends React.Component {
  render() {
    const { basics, t } = this.props;
    return (
      <div>
        <div className="col-md-4">
          <img src={basics.picture} style={{ maxWidth: '100%' }} />
        </div>
        <div className="col-md-8">
          <ResumeLabelValue label={t('resumePage.name')} value={basics.name}/>
          <ResumeLabelValue label={t('resumePage.email')} value={basics.email}/>
          <ResumeLabelValue label={t('resumePage.telephone')} value={basics.telephone}/>
          <ResumeLabelUrl label={t('resumePage.website')} url={basics.website}/>
          <ResumeLabelValue Value label={t('resumePage.summary')} value={basics.summary}/>
        </div>
        <ResumeSection title={t('resumePage.address')}>
          <Address location={basics.location}/>
        </ResumeSection>
      </div>
    );
  }
}

ResumeBasics.propTypes = {
  basics: React.PropTypes.object.isRequired,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeBasics);
