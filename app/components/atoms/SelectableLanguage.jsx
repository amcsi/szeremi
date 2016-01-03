import React from 'react';

import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { CHANGE_LANGUAGE } from '../../actions/actions';

const SelectableLanguage = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    code: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    currentLanguage: React.PropTypes.string.isRequired,
  },

  changeLanguage() {
    const type = CHANGE_LANGUAGE;
    const languageCode = this.props.code;
    this.props.dispatch({type, languageCode});
  },

  render() {
    const {code, currentLanguage} = this.props;
    return (
      <Button
          className="clickable"
          onClick={this.changeLanguage}
          bsStyle={currentLanguage === code ? 'success' : 'default'}
      >
        {this.props.name}
      </Button>
    );
  },

});

const mapStateToProps = ({currentLanguage}) => ({currentLanguage});

export default connect(mapStateToProps)(SelectableLanguage);
