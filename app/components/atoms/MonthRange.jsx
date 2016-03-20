import React from 'react';
import { translate } from 'react-i18next';
import moment from 'moment';

/**
 * Simple component for displaying a date range exact to the month
 */
class MonthRange extends React.Component {
  render() {
    const { startDate, endDate, t } = this.props;
    if (!startDate) {
      return null;
    }

    const startDateFormatted = moment(startDate).format(t('dateFormats.monthYear'));
    const displayDate = endDate ?
      `${startDateFormatted} - ${moment(endDate).format(t('dateFormats.monthYear'))}` :
      startDateFormatted;

    return <span>{displayDate}</span>;
  }
}

MonthRange.propTypes = {
  startDate: React.PropTypes.string,
  endDate: React.PropTypes.string,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(MonthRange);
