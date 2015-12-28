import React from 'react';

import {Button} from 'react-bootstrap';

export default React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      onClick: () => {},
    };
  },

  onClick(evt) {
    this.props.onClick(evt);
  },

  render() {
    return (
      <Button className="clickable" onClick={this.onClick}>
        {this.props.name}
      </Button>
    );
  },

});
