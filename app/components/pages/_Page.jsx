import PropTypes from 'prop-types';
import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { hot } from 'react-hot-loader';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          { this.props.children }
        </div>

        <Footer />
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
};

export default hot(module)(Page);
