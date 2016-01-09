import React from 'react';

const ResumeLabelUrl = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
  },

  render() {
    const {label, url} = this.props;

    return (
      <div>
        <strong>{label}:</strong> <a href={url}>{url}</a>
      </div>
    );
  },
});

export default ResumeLabelUrl;
