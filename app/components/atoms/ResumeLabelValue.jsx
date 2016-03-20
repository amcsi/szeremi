import React from 'react';

const ResumeLabelValue = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
  },

  render() {
    const { label, value } = this.props;
    if (!value) {
      return null;
    }

    return (
      <div>
        <strong>{label}:</strong> {value}
      </div>
    );
  },
});

export default ResumeLabelValue;
