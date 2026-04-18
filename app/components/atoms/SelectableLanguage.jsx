import React from 'react';

import { connect } from 'react-redux';
import { CHANGE_LANGUAGE } from '../../constants/actions';

class SelectableLanguage extends React.Component {

  render() {
    const { dispatch, languageCode, countryCode, currentLanguage, name } = this.props;
    const countryFlag = countryCode ?
      <span className={`flag-icon flag-icon-${countryCode.toLowerCase()}`} /> :
      null;

    function changeLanguage() { dispatch({ type: CHANGE_LANGUAGE, languageCode }); }

    return (
      <button
        onClick={changeLanguage}
        className={`button is-${currentLanguage === languageCode ? 'success' : 'default'}`}
      >
        <span className="icon" style={{ marginLeft: 0 }}>
          <i>{countryFlag}</i>
        </span>
        <span>{name}</span>
      </button>
    );
  }

}

const mapStateToProps = ({ currentLanguage }) => ({ currentLanguage });

export default connect(mapStateToProps)(SelectableLanguage);
