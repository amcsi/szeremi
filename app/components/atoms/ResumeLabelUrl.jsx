import PropTypes from 'prop-types';
import React from 'react';
import ExternalLink from './ExternalLink';

function ResumeLabelUrl({ label, url }) {
  return (
    <div>
      <strong>{label}:</strong> <ExternalLink href={url}>{url}</ExternalLink>
    </div>
  );
}

ResumeLabelUrl.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ResumeLabelUrl;
