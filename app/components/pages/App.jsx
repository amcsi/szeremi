import React from 'react';
import routes from '../../core/routes';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import TranslatorContext from './TranslatorContext';
import i18next from '../../core/translator';

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
      <Provider store={store}>
        <TranslatorContext i18next={i18next}>
          <Router history={history} routes={routes} />
        </TranslatorContext>
      </Provider>
    );
  }
}

export default App;
