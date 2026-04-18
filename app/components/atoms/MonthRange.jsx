import React from 'react';
import { withTranslation } from 'react-i18next';
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
    const endDateFormatted = endDate ? moment(endDate).format(t('dateFormats.monthYear')) : '';
    const displayDate = `${startDateFormatted} - ${endDateFormatted}`;

    return <span>{displayDate}</span>;
  }
}

export default withTranslation(['translation'])(MonthRange);
