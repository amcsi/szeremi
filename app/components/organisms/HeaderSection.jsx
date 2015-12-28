import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router';
import t from '../../core/translator';

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Szeremi
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <li><Link to="/">{t.t('app.home')}</Link></li>
            <li><Link to="/resume">{t.t('app.resumé')}</Link></li>
          </Nav>
        </Navbar>
      </div>
    );
  },
});
