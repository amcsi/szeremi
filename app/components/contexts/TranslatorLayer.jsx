import PropTypes from 'prop-types';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import HelmetLayer from './HelmetLayer';
/**
 * This wrapper component allows for hot module replacement of the translations.
 * It also allows for the language to be changed.
 */
class TranslatorLayer extends React.Component {
  componentWillReceiveProps({ i18next, currentLanguage }) {
    i18next.changeLanguage(currentLanguage);
  }

  render() {
    return (
      <I18nextProvider i18n={this.props.i18next}>
        <HelmetLayer>
          {this.props.children}
        </HelmetLayer>
      </I18nextProvider>
    );
  }
}

TranslatorLayer.propTypes = {
  i18next: PropTypes.object.isRequired,
  currentLanguage: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default connect(({ currentLanguage }) => ({ currentLanguage }))(TranslatorLayer);
