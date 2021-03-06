import PropTypes from 'prop-types';
import React from 'react';
import languages from '../../constants/lang/langs';
import SmallSelectableLanguageIcon from '../atoms/SmallSelectableLanguageIcon';

class HeaderLanguageSelector extends React.Component {
  render() {
    const containerStyle = Object.assign({
      display: 'flex',
      alignItems: 'center',
    }, this.props.style);

    return (
      <div style={containerStyle}>
        {languages.map(({ name, languageCode, countryCode }) => (
          <span key={name}>
            <SmallSelectableLanguageIcon
              name={name}
              languageCode={languageCode}
              countryCode={countryCode}
            />{' '}
          </span>
        ))}
      </div>
    );
  }
}

HeaderLanguageSelector.propTypes = {
  style: PropTypes.object,
};

export default (HeaderLanguageSelector);
