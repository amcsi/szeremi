import React from 'react';

import { translate } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import ExternalLink from '../atoms/ExternalLink';
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
        <Navbar style={{ fontSize: '115%' }}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" style={{ fontSize: '150%' }}>Szeremi</Link>
            </Navbar.Brand>
            <HeaderLanguageSelector />
          </Navbar.Header>
          <Nav
            pullRight
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, .5)',
              fontSize: '120%',
            }}
          >
            <li>
              <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
                <span className="fa fa-home" /> {t('home')}
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" onlyActiveOnIndex={true}>
                <span className="fa fa-star" /> {t('about')}
              </Link>
            </li>
            <li>
              <Link to="/cv" activeClassName="active" onlyActiveOnIndex={true}>
                <span className="fa fa-briefcase" /> {t('resumé')}
              </Link>
            </li>
            <li><ExternalLink href="http://blog.szeremi.org/">{t('blog')}</ExternalLink></li>
          </Nav>
        </Navbar>
      </div>
    );
  },
});

export default translate(['translation'])(Header);
