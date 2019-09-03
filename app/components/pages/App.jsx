import PropTypes from 'prop-types';
import React from 'react';
import routes from '../../core/routes';
import { Router } from 'react-router';
import Contexts from './../contexts/Contexts';

import 'font-awesome/scss/font-awesome.scss';
import './App.scss';

class App extends React.Component {
  static propTypes() {
    return {
      store: PropTypes.object,
      history: PropTypes.object,
    };
  }

  render() {
    const { store, history } = this.props;

    return (
      <Contexts store={store}>
        <Router history={history} routes={routes} />
      </Contexts>
    );
  }
}

export default App;
