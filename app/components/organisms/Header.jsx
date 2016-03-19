import React from 'react';

import { translate } from 'react-i18next';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router';

const Header = React.createClass({

  propTypes: {
    t: React.PropTypes.func.isRequired,
  },

  render() {
    const {t} = this.props;

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Szeremi
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <li><Link to="/">{t('home')}</Link></li>
            <li><a href="http://blog.szeremi.org/">{t('blog')}</a></li>
            <li><Link to="/resume">{t('resumé')}</Link></li>
          </Nav>
        </Navbar>
      </div>
    );
  },
});

export default translate(['translation'])(Header);