import PropTypes from 'prop-types';
import React from 'react';
import TranslatorLayer from './TranslatorLayer';
import i18next from '../../core/translator';
import { Provider } from 'react-redux';

/**
 * Component with the common outermost contexts
 */
class Contexts extends React.Component {
  render() {
    const { store, children } = this.props;

    return (
      <Provider store={store}>
        <TranslatorLayer i18next={i18next}>
          { children }
        </TranslatorLayer>
      </Provider>
    );
  }
}

Contexts.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default (Contexts);
