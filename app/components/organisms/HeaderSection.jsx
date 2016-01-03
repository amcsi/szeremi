import React from 'react';

import { translate } from 'react-i18next/lib/index';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router';

function HeaderSection({t}) {
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
          <li><Link to="/resume">{t('resumé')}</Link></li>
        </Nav>
      </Navbar>
    </div>
  );
}

export default translate(['translation'])(HeaderSection);
