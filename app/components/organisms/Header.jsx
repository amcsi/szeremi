import React, { useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import HeaderNavItem from '../atoms/HeaderNavItem';
import HeaderLanguageSelector from '../molecules/HeaderLanguageSelector';

/** Matches Bulma’s `$desktop` (960px + 2×32px gap) so the menu state resets when leaving the burger layout. */
const NAVBAR_DESKTOP_MIN_WIDTH = 1024;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${NAVBAR_DESKTOP_MIN_WIDTH}px)`);
    const onViewportChange = () => {
      if (mq.matches) {
        setMenuOpen(false);
      }
    };
    mq.addEventListener('change', onViewportChange);
    return () => mq.removeEventListener('change', onViewportChange);
  }, []);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Szeremi
            </Link>

            <button
              type="button"
              className={`navbar-burger burger${menuOpen ? ' is-active' : ''}`}
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu${menuOpen ? ' is-active' : ''}`}>
            <div className="navbar-start">
              <HeaderLanguageSelector />
            </div>
            <div
              className="navbar-end"
              itemScope
              itemType="http://www.schema.org/SiteNavigationElement"
            >
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
