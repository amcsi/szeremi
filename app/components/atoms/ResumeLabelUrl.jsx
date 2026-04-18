import React from 'react';
import ExternalLink from './ExternalLink';

function ResumeLabelUrl({ label, url }) {
  return (
    <div>
      <strong>{label}:</strong> <ExternalLink href={url}>{url}</ExternalLink>
    </div>
  );
}

export default ResumeLabelUrl;
