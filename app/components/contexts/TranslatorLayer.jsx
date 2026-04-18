import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import HelmetLayer from './HelmetLayer';
/**
 * This wrapper component allows for hot module replacement of the translations.
 * It also allows for the language to be changed.
 */
class TranslatorLayer extends React.Component {
  componentDidMount() {
    const { i18next, currentLanguage } = this.props;
    if (currentLanguage) {
      i18next.changeLanguage(currentLanguage);
    }
  }

  componentDidUpdate(prevProps) {
    const { i18next, currentLanguage } = this.props;
    if (prevProps.currentLanguage !== currentLanguage && currentLanguage) {
      i18next.changeLanguage(currentLanguage);
    }
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

export default connect(({ currentLanguage }) => ({ currentLanguage }))(TranslatorLayer);
