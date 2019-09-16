import PropTypes from 'prop-types';
import React from 'react';
import Contexts from './../contexts/Contexts';

import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './_App.scss';
// These overrides can't be imported in the scss file, because for some reason,
// Bulma's defaults otherwise override these.
import '../../css/bulma-social.css';

class App extends React.Component {
  static propTypes() {
    return {
      store: PropTypes.object,
      children: PropTypes.node,
    };
  }

  render() {
    const { store, children } = this.props;

    return (
      <Contexts store={store}>
        { children }
      </Contexts>
    );
  }
}

export default App;
