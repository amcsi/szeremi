import React from 'react';
import { connect } from 'react-redux';
import ResumeBasics from '../molecules/ResumeBasics';

class ResumeSection extends React.Component {
  render() {
    const { resume } = this.props;
    return (
      <div className="container">
        <ResumeBasics basics={resume.basics} />
      </div>
    );
  }
}

ResumeSection.propTypes = {
  resume: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    resume: state.resume,
  };
}

export default connect(mapStateToProps)(ResumeSection);
