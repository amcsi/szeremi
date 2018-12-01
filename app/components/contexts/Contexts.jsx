import React from 'react';
import ReactBreakpoints from 'react-breakpoints';
import TranslatorLayer from './TranslatorLayer';
import i18next from '../../core/translator';
import { Provider } from 'react-redux';

const breakpoints = {
  xs: 480,
  sm: 768,
};

/**
 * Component with the common outermost contexts
 */
class Contexts extends React.Component {
  render() {
    const { store, children } = this.props;

    return (
      <Provider store={store}>
        <TranslatorLayer i18next={i18next}>
          <ReactBreakpoints breakpoints={breakpoints} guessedBreakpoint="sm">
            { children }
          </ReactBreakpoints>
        </TranslatorLayer>
      </Provider>
    );
  }
}

Contexts.propTypes = {
  store: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default (Contexts);
