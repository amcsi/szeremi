import React from 'react';

import TranslatorContext from '../pages/TranslatorContext';
import i18next from '../../core/translator';
import { Provider } from 'react-redux';
/**
 * Component with the common outermost contexts
 */
class Contexts extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <TranslatorContext i18next={i18next}>
          { this.props.children }
        </TranslatorContext>
      </Provider>
    );
  }
}

Contexts.propTypes = {
  store: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default (Contexts);
