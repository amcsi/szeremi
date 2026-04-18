import React from 'react';
import MonthRange from './MonthRange';

/**
 * Month range to display after titles on the resume page.
 */
class AfterTitleMonthRange extends React.Component {
  render() {
    if (!this.props.startDate) {
      return null;
    }
    return (
      <span style={{ marginLeft: 10 }}>
         <span className="fas fa-calendar" /> <MonthRange {...this.props} />
      </span>
    );
  }
}

export default AfterTitleMonthRange;
