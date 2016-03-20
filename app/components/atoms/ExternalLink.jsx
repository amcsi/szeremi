import React from 'react';

class ExternalLink extends React.Component {
  render() {
    return (
      <a target="_blank" rel="noopener" {...this.props}>
        {this.props.children} <span className="fa fa-external-link" />
      </a>
    );
  }
}

ExternalLink.propTypes = {
  children: React.PropTypes.node,
};

export default ExternalLink;
