import React from 'react';

import HeaderSection from '../organisms/HeaderSection';
import ResumeSection from '../organisms/ResumeSection';
import {connect} from 'react-redux';

var Resume = React.createClass({
  render() {
    return (
      <div>
        <HeaderSection/>

        <ResumeSection/>
      </div>
    );
  },
});

export default connect()(Resume);
