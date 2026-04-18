import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import HomePageLanguageSelector from '../molecules/HomePageLanguageSelector';
import ExternalLink from '../atoms/ExternalLink';

class Footer extends React.Component {
  render() {
    const githubLink = 'https://github.com/amcsi/szeremi';

    return (
      <footer style={{ textAlign: 'center', paddingBottom: 15 }}>
        <HomePageLanguageSelector />

        <div style={{ marginTop: 10 }}>
          <Trans
            i18nKey="footer.openSourceProject"
            components={{
              gh: <ExternalLink href={githubLink} />,
            }}
            values={{ link: githubLink }}
          />
        </div>
      </footer>
    );
  }
}

export default withTranslation(['translation'])(Footer);
