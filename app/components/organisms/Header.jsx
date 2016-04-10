import React from 'react';

import { translate } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import ExternalLink from '../atoms/ExternalLink';
import HeaderNavItem from '../atoms/HeaderNavItem';
import HeaderLanguageSelector from '../molecules/HeaderLanguageSelector';

import './Header.scss';

const Header = React.createClass({

  propTypes: {
    t: React.PropTypes.func.isRequired,
  },

  render() {
    const { t } = this.props;

    return (
      <div className="header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Szeremi</Link>
            </Navbar.Brand>
            <HeaderLanguageSelector />
          </Navbar.Header>
          <Nav pullRight itemScope itemType="http://www.schema.org/SiteNavigationElement">
            <HeaderNavItem to="/" faIcon="home" />
            <HeaderNavItem to="/about" faIcon="star" />
            <HeaderNavItem to="/cv" faIcon="briefcase" />
            <li><ExternalLink href="http://blog.szeremi.org/">{t('blog')}</ExternalLink></li>
          </Nav>
        </Navbar>
      </div>
    );
  },
});

export default translate(['translation'])(Header);
