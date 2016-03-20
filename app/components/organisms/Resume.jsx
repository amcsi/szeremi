import React from 'react';
import { connect } from 'react-redux';
import ResumeBasics from '../molecules/ResumeBasics';
import ResumeWork from '../molecules/ResumeWork';
import ResumeVolunteer from '../molecules/ResumeVolunteer';
import ResumeEducation from '../molecules/ResumeEducation';

class Resume extends React.Component {
  render() {
    const { resume } = this.props;
    return (
      <div className="container">
        <ResumeBasics basics={resume.basics} />
        <ResumeWork works={resume.work} />
        <ResumeVolunteer volunteers={resume.volunteer} />
        <ResumeEducation items={resume.education} />
      </div>
    );
  }
}

Resume.propTypes = {
  resume: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    resume: state.resume,
  };
}

export default connect(mapStateToProps)(Resume);
