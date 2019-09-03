import PropTypes from 'prop-types';
import React from 'react';

/**
 * Represents a category in the résumé (e.g. Work, Volunteer etc.)
 */
class ResumeCategory extends React.Component {
  render() {
    const { title, shouldClearLeft, currentLength, children } = this.props;
    if (!children) {
      return null;
    }
    const style = { float: 'left' };
    // If the amount of items here are larger than 1, it means we are going to take up the entire
    // row. If not, use 'col-md-6' in case the next category also has only 1 item in it to
    // fit two next to each other. We're relying on clear-lefts to cancel floats in case e.g.
    // the next category has more than 1 item in it and thus it must start in a new row.
    const className = currentLength <= 1 ? 'col-md-6' : '';

    if (shouldClearLeft) {
      style.clear = 'left';
    }

    return (
      <div style={style} className={className}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

ResumeCategory.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  shouldClearLeft: PropTypes.bool,
  previousLength: PropTypes.number,
  currentLength: PropTypes.number,
};

export default (ResumeCategory);
