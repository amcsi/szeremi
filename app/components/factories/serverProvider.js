import React from 'react';
import configureStore from '../../core/configureStore';
import TranslatorContext from '../pages/TranslatorContext';
import i18next from '../../core/translator';
import { Provider } from 'react-redux';

/**
 * Returns the root context to use on the server-side.
 *
 * @param initialState
 */
function serverProvider(initialState) {
  const store = configureStore(initialState);
  return class extends React.Component {
    static propTypes() {
      return {
        children: React.PropTypes.node.isRequired,
      };
    }

    render() {
      return (
        <Provider store={store}>
          <TranslatorContext i18next={i18next}>
            { this.props.children }
          </TranslatorContext>
        </Provider>
      );
    }
  };
}

export default serverProvider;
