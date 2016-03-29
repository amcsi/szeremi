import React from 'react';

import { translate } from 'react-i18next';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router';
import ExternalLink from '../atoms/ExternalLink';
import HeaderLanguageSelector from '../molecules/HeaderLanguageSelector';

import './Header.css';

const Header = React.createClass({

  propTypes: {
    t: React.PropTypes.func.isRequired,
  },

  render() {
    const { t } = this.props;

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Szeremi</Link>
            </Navbar.Brand>
            <HeaderLanguageSelector />
          </Navbar.Header>
          <Nav pullRight>
            <li><Link to="/"><span className="fa fa-home" /> {t('home')}</Link></li>
            <li><Link to="/resume"><span className="fa fa-briefcase" /> {t('resumé')}</Link></li>
            <li><ExternalLink href="http://blog.szeremi.org/">{t('blog')}</ExternalLink></li>
          </Nav>
        </Navbar>
      </div>
    );
  },
});

export default translate(['translation'])(Header);
