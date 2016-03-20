import React from 'react';
import MonthRange from './MonthRange';

/**
 * Month range to display after titles on the resume page.
 */
class AfterTitleMonthRange extends React.Component {
  render() {
    return (
      <span style={{ marginLeft: 10 }} {...this.props}>
         <span className="fa fa-calendar" /> <MonthRange {...this.props} />
      </span>
    );
  }
}

AfterTitleMonthRange.propTypes = {
  startDate: React.PropTypes.string,
  endDate: React.PropTypes.string,
};

export default AfterTitleMonthRange;