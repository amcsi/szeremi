import React from 'react';
import { translate } from 'react-i18next';

/**
 * Resume items list
 */
class ResumeListing extends React.Component {
  render() {
    const { items, title } = this.props;
    if (!items || !items.length) {
      return null;
    }
    return (
      <div>
        <h4>{title}</h4>
        <ul>
          {items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ResumeListing.propTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.array,
};

export default (ResumeListing);
