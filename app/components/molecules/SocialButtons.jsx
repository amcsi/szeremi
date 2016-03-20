import React from 'react';
import { Button } from 'react-bootstrap';

class SocialButtons extends React.Component {

  getSocialKeyByProfile(profile) {
    return profile.network.toLowerCase().replace(/ /g, '');
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
  profiles: React.PropTypes.array,
};

export default SocialButtons;
