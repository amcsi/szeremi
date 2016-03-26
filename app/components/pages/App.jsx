import React from 'react';
import routes from '../../core/routes';
import { Router } from 'react-router';
import history from '../../core/history';
import { Provider } from 'react-redux';
import TranslatorContext from './TranslatorContext';

class App extends React.Component {
  static propTypes() {
    return {
      store: React.PropTypes.object,
    };
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <TranslatorContext>
          <Router history={history} routes={routes} />
        </TranslatorContext>
      </Provider>
    );
  }
}

export default App;
