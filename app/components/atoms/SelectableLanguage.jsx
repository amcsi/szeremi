import React from 'react';

import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { CHANGE_LANGUAGE } from '../../actions/actions';

const SelectableLanguage = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    code: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  },

  changeLanguage() {
    const type = CHANGE_LANGUAGE;
    const languageCode = this.props.code;
    this.props.dispatch({type, languageCode});
  },

  render() {
    return (
      <Button className="clickable" onClick={this.changeLanguage}>
        {this.props.name}
      </Button>
    );
  },

});

export default connect()(SelectableLanguage);
