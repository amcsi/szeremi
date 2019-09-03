import PropTypes from 'prop-types';
import React from 'react';
import ExternalLink from './ExternalLink';

const ResumeLabelUrl = React.createClass({
  propTypes: {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  },

  render() {
    const {label, url} = this.props;

    return (
      <div>
        <strong>{label}:</strong> <ExternalLink href={url}>{url}</ExternalLink>
      </div>
    );
  },
});

export default ResumeLabelUrl;
