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

  render() {
    return (
      <Button className="clickable" onClick={this.props.onClick}>
        {this.props.name}
      </Button>
    );
  },

});
