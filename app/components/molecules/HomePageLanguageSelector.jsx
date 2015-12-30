import React from 'react';

import SelectableLanguage from '../atoms/SelectableLanguage';

export default React.createClass({

  propTypes: {
    onClick: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      onClick: () => {},
    };
  },

  render() {
    return (
      <div>
        <SelectableLanguage name="English" onClick={this.props.onClick.bind(null, 'en')}/>
        <SelectableLanguage name="Magyar" onClick={this.props.onClick.bind(null, 'hu')}/>
        <SelectableLanguage name="Español" onClick={this.props.onClick.bind(null, 'es')}/>
      </div>
    );
  },
});
