import PropTypes from 'prop-types';
import React from 'react';
import { translate, Interpolate } from 'react-i18next';
import HomePageLanguageSelector from '../molecules/HomePageLanguageSelector';
import ExternalLink from '../atoms/ExternalLink';

class Footer extends React.Component {
  static propTypes() {
    return {
      t: PropTypes.func.isRequired,
    };
  }
  render() {
    const githubLink = 'https://github.com/amcsi/szeremi';
    const GithubLinkComponent = <ExternalLink href={githubLink}>{githubLink}</ExternalLink>;

  return (
      <footer style={{ textAlign: 'center', paddingBottom: 15 }}>
        <HomePageLanguageSelector />
        
        <div style={{ marginTop: 10 }}><Interpolate i18nKey="footer.openSourceProject" link={GithubLinkComponent} /></div>
      </footer>
    );
  }
}

export default translate(['translation'])(Footer);
