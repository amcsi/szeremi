import React from 'react';
import HomePage from './HomePage';
import Resume from './Resume';
import t from '../../core/translator';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Router, Route, Link} from 'react-router';
import history from '../../core/history';

export default React.createClass({

  onLanguageChange(languageCode) {
    t.changeLanguage(languageCode);
    this.setState({languageCode});
  },

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Szeremi</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1}><Link to="/">{t.t('app.home')}</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/resume">{t.t('app.resumé')}</Link></NavItem>
          </Nav>
        </Navbar>
        <Router history={history}>
          <Route path="/" onLanguageChange={this.onLanguageChange} component={HomePage}>
            <Route path="resume" component={Resume}/>
          </Route>
        </Router>
      </div>
    );
  },
});
