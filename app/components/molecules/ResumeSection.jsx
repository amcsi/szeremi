import React from 'react';

class ResumeSection extends React.Component {
  render() {
    const { title, children } = this.props;
    if (!children) {
      // If there are no children to render, don't render this section either.
      return null;
    }
    return (
      <div className="col-md-6">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

ResumeSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
};

export default ResumeSection;
