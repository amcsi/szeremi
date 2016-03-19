import React from 'react';

const ResumeLabelValue = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  },

  render() {
    const { label, value } = this.props;

    return (
      <div>
        <strong>{label}:</strong> {value}
      </div>
    );
  },
});

export default ResumeLabelValue;
