import PropTypes from 'prop-types';
import React from 'react';
import './SocialButtons.scss';

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
      <div className="social-icons">
        {profiles.map((profile) => {
          const socialKey = this.getSocialKeyByProfile(profile);
          const params = {};
          if (profile.url) {
            params.href = profile.url;
            params.target = '_blank';
            params.rel = 'noopener';
          }
          return (
            <a key={profile.network} className={`button is-${socialKey}`} {...params}>
              <span className={`fa fa-${socialKey}`} />
            </a>
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
