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

  onClick(code, evt) {
    this.props.onClick(code, evt);
  },

  render() {
    return (
      <div>
        <SelectableLanguage name="English" onClick={this.onClick.bind(this, 'en')}/>
        <SelectableLanguage name="Magyar" onClick={this.onClick.bind(this, 'hu')}/>
        <SelectableLanguage name="Español" onClick={this.onClick.bind(this, 'es')}/>
      </div>
    );
  },
});
