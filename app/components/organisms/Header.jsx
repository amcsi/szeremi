import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import HeaderNavItem from '../atoms/HeaderNavItem';
import HeaderLanguageSelector from '../molecules/HeaderLanguageSelector';

import './Header.scss';

function Header() {
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
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
