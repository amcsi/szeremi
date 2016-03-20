import React from 'react';

class ResumeSection extends React.Component {
  render() {
    const { title, afterTitle, children } = this.props;
    if (!children) {
      // If there are no children to render, don't render this section either.
      return null;
    }
    return (
      <div className="col-md-6">
        <div style={{ marginBottom: 5 }}>
          <h3 style={{ display: 'inline' }}>{title}</h3> {afterTitle}
        </div>
        {children}
      </div>
    );
  }
}

ResumeSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  afterTitle: React.PropTypes.oneOf([React.PropTypes.string, React.PropTypes.node]),
  children: React.PropTypes.node,
};

export default ResumeSection;
