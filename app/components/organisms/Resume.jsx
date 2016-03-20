import React from 'react';
import { connect } from 'react-redux';
import ResumeBasics from '../molecules/ResumeBasics';
import ResumeWork from '../molecules/ResumeWork';
import ResumeVolunteer from '../molecules/ResumeVolunteer';
import ResumeEducation from '../molecules/ResumeEducation';
import ResumeAwards from '../molecules/ResumeAwards';
import ResumePublications from '../molecules/ResumePublications';
import ResumeSkills from '../molecules/ResumeSkills';
import ResumeEtc from '../molecules/ResumeEtc';

class Resume extends React.Component {
  render() {
    const { resume } = this.props;
    return (
      <div className="container">
        <ResumeBasics basics={resume.basics} />
        <ResumeWork items={resume.work} />
        <ResumeVolunteer items={resume.volunteer} />
        <ResumeEducation items={resume.education} />
        <ResumeAwards items={resume.awards} />
        <ResumePublications items={resume.publications} />
        <ResumeSkills items={resume.skills} />
        <ResumeEtc
          languages={resume.languages}
          interests={resume.interests}
          references={resume.references}
        />
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
