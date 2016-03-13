import React from 'react';

import Header from '../organisms/Header';
import OrganismResume from '../organisms/Resume';
import { connect } from 'react-redux';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Header/>

        <OrganismResume/>
      </div>
    );
  }
}

export default connect()(Resume);
