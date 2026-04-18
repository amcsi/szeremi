import PropTypes from 'prop-types';
import React from 'react';

class ResumeKeywords extends React.Component {
  render() {
    const { items } = this.props;
    if (!items || !items.length) {
      return null;
    }

    return (
      <div>
        {items.map((item, index) => (
          <span key={index}>
            <span className="tag is-info">
              {item}
            </span>{' '}
          </span>
        ))}
      </div>
    );
  }
}

ResumeKeywords.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ResumeKeywords;
