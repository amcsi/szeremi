import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

class SocialButtons extends React.Component {

  getSocialKeyByProfile(profile) {
    const networkLowercase = profile.network.toLowerCase();
    switch (networkLowercase) {
      case 'stackoverflow':
        return 'stack-overflow';
      default:
        return networkLowercase.replace(/ /g, '');
    }
  }

  render() {
    const { profiles } = this.props;

    if (!profiles.length) {
      return null;
    }

    return (
      <div>
        {profiles.map((profile) => {
          const buttonText = profile.username || profile.network;
          const socialKey = this.getSocialKeyByProfile(profile);
          const params = {};
          if (profile.url) {
            params.href = profile.url;
            params.target = '_blank';
            params.rel = 'noopener';
          }
          return (
            <span key={profile.network}>
              <Button
                className={`btn-social btn-${socialKey}`}
                {...params}
                style={{ marginBottom: 5 }}
              >
                <span className={`fa fa-${socialKey}`}/>
                {buttonText}
              </Button>{' '}
            </span>
          );
        })}
      </div>
    );
  }
}

SocialButtons.propTypes = {
  profiles: PropTypes.array,
};

export default SocialButtons;
