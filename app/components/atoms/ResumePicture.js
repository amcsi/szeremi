import React from 'react';
import SocialButtons from '../molecules/SocialButtons';

class ResumePicture extends React.Component {
  render() {
    const { basics } = this.props;

    return (
      <div>
        <img
          src={basics.picture}
          className="img-rounded"
          style={{ maxWidth: '100%', marginBottom: 5 }}
        />
        <SocialButtons profiles={basics.profiles} />
      </div>
    );
  }
}

ResumePicture.propTypes = {
  basics: React.PropTypes.object.isRequired,
};

export default (ResumePicture);
