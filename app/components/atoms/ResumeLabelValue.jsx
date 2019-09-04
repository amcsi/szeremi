import PropTypes from 'prop-types';
import React from 'react';

function ResumeLabelValue({ label, value, ...restProps }) {
  if (!value) {
    return null;
  }

  // Turns newlines into <br>s.
  // A component is needed for that though so only do that if there is a newline.
  const valueNl2Br = typeof value === 'string' && value.indexOf('\n') > -1 ?
    value.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    )) :
    value;

  return (
    <div {...restProps}>
      <strong>{label}:</strong> {valueNl2Br}
    </div>
  );
}

ResumeLabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
};

export default ResumeLabelValue;
