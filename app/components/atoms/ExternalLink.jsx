import PropTypes from 'prop-types';
import React from 'react';

class ExternalLink extends React.Component {
  render() {
    return (
      <a target="_blank" rel="noopener" {...this.props}>
        {this.props.children} <span className="fas fa-external-link-alt" />
      </a>
    );
  }
}

ExternalLink.propTypes = {
  children: PropTypes.node,
};

export default ExternalLink;
