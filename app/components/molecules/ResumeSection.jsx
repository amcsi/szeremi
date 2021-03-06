import PropTypes from 'prop-types';
import React from 'react';
import ExternalLink from '../atoms/ExternalLink';

class ResumeSection extends React.Component {
  render() {
    const { title, titleUrl, afterTitle, sizeClassName, style, children } = this.props;
    if (!children) {
      // If there are no children to render, don't render this section either.
      return null;
    }

    const displayTitle = titleUrl ? <span>{title} <ExternalLink href={titleUrl} /></span> : title;
    const defaultStyle = {
      marginBottom: 20,
      float: 'none',
      display: 'inline-block',
      verticalAlign: 'top',
    };
    const componentStyle = Object.assign(defaultStyle, style || {});
    return (
      <div className={sizeClassName} style={componentStyle}>
        <div style={{ marginBottom: 5 }}>
          <h3 style={{ display: 'inline' }}>{displayTitle}</h3> {afterTitle}
        </div>
        {children}
      </div>
    );
  }
}

ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  titleUrl: PropTypes.string,
  afterTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  sizeClassName: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default ResumeSection;
