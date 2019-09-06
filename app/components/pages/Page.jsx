import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Router } from '@reach/router';
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

          <Router>
            <HomePage path="/" />
            <About path="/about" />
            <Resume path="/cv" />
            <Redirect from="/resume" to="cv" />
          </Router>

        <Footer />
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
};

export default (Page);
