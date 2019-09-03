import PropTypes from 'prop-types';
import React from 'react';

import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { CHANGE_LANGUAGE } from '../../constants/actions';

class SelectableLanguage extends React.Component {

  static propTypes() {
    return {
      name: PropTypes.string.isRequired,
      languageCode: PropTypes.string.isRequired,
      countryCode: PropTypes.string,
      dispatch: PropTypes.func.isRequired,
      currentLanguage: PropTypes.string.isRequired,
    };
  }

  render() {
    const { dispatch, languageCode, countryCode, currentLanguage, name } = this.props;
    const countryFlag = countryCode ?
      <span className={`flag-icon flag-icon-${countryCode.toLowerCase()}`} /> :
      null;

    function changeLanguage() { dispatch({ type: CHANGE_LANGUAGE, languageCode }); }

    return (
      <Button
        className="clickable"
        onClick={changeLanguage}
        bsStyle={currentLanguage === languageCode ? 'success' : 'default'}
      >
        {countryFlag} {name}
      </Button>
    );
  }

}

const mapStateToProps = ({ currentLanguage }) => ({ currentLanguage });

export default connect(mapStateToProps)(SelectableLanguage);
