import React from 'react';
import { translate } from 'react-i18next';

/**
 * Resume highlights list
 */
class ResumeHighlights extends React.Component {
  render() {
    const { t, highlights } = this.props;
    if (!highlights || !highlights.length) {
      return null;
    }
    return (
      <div>
        <h4>{t('resumePage.highlights')}</h4>
        <ul>
          {highlights.map(highlight => (
            <li>{highlight}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ResumeHighlights.propTypes = {
  highlights: React.PropTypes.array,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(ResumeHighlights);
