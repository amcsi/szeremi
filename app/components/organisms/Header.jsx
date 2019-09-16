import React from 'react';

import { Link } from 'gatsby';
import HeaderNavItem from '../atoms/HeaderNavItem';
import HeaderLanguageSelector from '../molecules/HeaderLanguageSelector';

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Szeremi
            </Link>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
            <HeaderLanguageSelector />
          </div>
          <div className="navbar-menu">
            <div className="navbar-end" itemScope itemType="http://www.schema.org/SiteNavigationElement">
              <HeaderNavItem to="/" faIcon="home" />
              <HeaderNavItem to="/about" faIcon="star" />
              <HeaderNavItem to="/cv" faIcon="briefcase" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
