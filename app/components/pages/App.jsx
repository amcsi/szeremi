import PropTypes from 'prop-types';
import React from 'react';
import Contexts from './../contexts/Contexts';

import 'font-awesome/scss/font-awesome.scss';
import './App.scss';

class App extends React.Component {
  static propTypes() {
    return {
      store: PropTypes.object,
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
