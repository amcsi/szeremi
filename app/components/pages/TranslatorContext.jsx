import React from 'react';
import i18next from '../../core/translator';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';

/**
 * This wrapper component allows for hot module replacement of the translations.
 */
class TranslatorContext extends React.Component {
  componentWillReceiveProps({ currentLanguage }) {
    i18next.changeLanguage(currentLanguage);
  }

  render() {
    return (
      <I18nextProvider i18n={i18next}>
        {this.props.children}
      </I18nextProvider>
    );
  }
}

TranslatorContext.propTypes = {
  children: React.PropTypes.node,
};

export default connect(({ currentLanguage }) => ({ currentLanguage }))(TranslatorContext);
