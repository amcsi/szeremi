import React from 'react';
import { Label } from 'react-bootstrap';

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
            <Label bsStyle="info">
              {item}
            </Label>{' '}
          </span>
        ))}
      </div>
    );
  }
}

ResumeKeywords.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default ResumeKeywords;
