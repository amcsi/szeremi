import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';

/**
 * This wrapper component allows for hot module replacement of the translations.
 */
class TranslatorContext extends React.Component {
  componentWillReceiveProps({ i18next, currentLanguage }) {
    i18next.changeLanguage(currentLanguage);
  }

  render() {
    return (
      <I18nextProvider i18n={this.props.i18next}>
        {this.props.children}
      </I18nextProvider>
    );
  }
}

TranslatorContext.propTypes = {
  i18next: React.PropTypes.object.isRequired,
  currentLanguage: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default connect(({ currentLanguage }) => ({ currentLanguage }))(TranslatorContext);
