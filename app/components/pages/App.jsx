import React from 'react';
import routes from '../../core/routes';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import TranslatorContext from './TranslatorContext';
import i18next from '../../core/translator';

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
        <TranslatorContext i18next={i18next}>
          <Router history={browserHistory} routes={routes} />
        </TranslatorContext>
      </Provider>
    );
  }
}

export default App;
