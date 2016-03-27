import React from 'react';
import HomePageLanguageSelector from '../molecules/HomePageLanguageSelector';

class Footer extends React.Component {
  render() {
    return (
      <footer style={{ textAlign: 'center', paddingBottom: 15 }}>
        <HomePageLanguageSelector />
      </footer>
    );
  }
}

export default Footer;
