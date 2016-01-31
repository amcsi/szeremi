import React from 'react';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';

class ResumeBasics extends React.Component {
  render() {
    const { basics } = this.props;
    return (
      <div>
        <div className="col-md-4">
          <img src={basics.picture} style={{ maxWidth: '100%' }} />
        </div>
        <div className="col-md-8">
          <ResumeLabelValue label="Name" value={basics.name}/>
          <ResumeLabelValue label="Email" value={basics.email}/>
          <ResumeLabelUrl label="Website" url={basics.website}/>
        </div>
      </div>
    );
  }
}

ResumeBasics.propTypes = {
  basics: React.PropTypes.object.isRequired,
};

export default ResumeBasics;
