import React from 'react';

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
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResumeListing;
