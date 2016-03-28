import React from 'react';

import { connect } from 'react-redux';
import { CHANGE_LANGUAGE } from '../../constants/actions';

import './SmallSelectableLanguageIcon.css';

class SelectableLanguage extends React.Component {

  static propTypes() {
    return {
      name: React.PropTypes.string.isRequired,
      languageCode: React.PropTypes.string.isRequired,
      countryCode: React.PropTypes.string,
      dispatch: React.PropTypes.func.isRequired,
      currentLanguage: React.PropTypes.string.isRequired,
    };
  }

  render() {
    const { dispatch, languageCode, countryCode, currentLanguage, name } = this.props;
    const countryFlag = countryCode ?
      <span className={`flag-icon flag-icon-${countryCode.toLowerCase()}`} /> :
      null;
    const classNames = ['small-selectable-language-icon'];
    if (currentLanguage !== languageCode) {
      classNames.push('small-selectable-language-icon--not-active');
    }

    function changeLanguage() { dispatch({ type: CHANGE_LANGUAGE, languageCode }); }

    return (
      <span
        className={classNames.join(' ')}
        title={name}
        onClick={changeLanguage}
      >{countryFlag}</span>
    );
  }

}

const mapStateToProps = ({ currentLanguage }) => ({ currentLanguage });

export default connect(mapStateToProps)(SelectableLanguage);
