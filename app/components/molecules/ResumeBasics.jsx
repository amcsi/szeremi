import React from 'react';
import {connect} from 'react-redux';
import ResumeLabelValue from '../atoms/ResumeLabelValue';
import ResumeLabelUrl from '../atoms/ResumeLabelUrl';

const ResumeBasics = React.createClass({

  propTypes: {
    basics: React.PropTypes.object.isRequired,
  },

  render() {
    const {basics} = this.props;
    return (
      <div>
        <ResumeLabelValue label="Name" value={basics.name}/>
        <ResumeLabelValue label="Email" value={basics.email}/>
        <ResumeLabelUrl label="Website" url={basics.website}/>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    basics: state.resume.basics,
  };
}

export default connect(mapStateToProps)(ResumeBasics);
