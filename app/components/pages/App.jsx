import React from 'react';
import routes from '../../core/routes';
import { Router } from 'react-router';
import Contexts from './Contexts';

import 'font-awesome/scss/font-awesome.scss';
import './App.scss';

class App extends React.Component {
  static propTypes() {
    return {
      store: React.PropTypes.object,
      history: React.PropTypes.object,
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
