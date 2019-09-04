import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Resume from '../organisms/Resume';
import About from './About';
import HomePage from './HomePage';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/cv" component={Resume} />
          <Redirect from="/resume" to="cv" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
};

export default (Page);
