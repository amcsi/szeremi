import React from 'react';
import { translate } from 'react-i18next';

class Address extends React.Component {

  render() {
    const { location, t } = this.props;
    if (!location) {
      return null;
    }

    const rows = [];
    let currentRow = [];
    if (location.address) {
      currentRow.push(<span className="address">{location.address}</span>);
      rows.push(currentRow);
    }
    currentRow = [];
    if (location.city) {
      currentRow.push(<span className="city">{location.city}</span>);
    }
    if (location.region) {
      currentRow.push(<span className="region">{location.regional}</span>);
    }
    if (currentRow.length) {
      rows.push(currentRow);
    }
    currentRow = [];
    if (location.postalCode) {
      currentRow.push(<span className="region">{location.postalCode}</span>);
    }
    const countryCode = location.countryCode;
    if (countryCode) {
      const displayCountry = t(`countryCodes.${countryCode}`, { defaultValue: countryCode });
      currentRow.push(<span className="country">{displayCountry}</span>);
    }
    if (currentRow.length) {
      rows.push(currentRow);
    }
    // If there are no address rows, don't render anything.
    if (!rows.length) {
      return null;
    }

    return (
      <div>
        {rows.map((row, index) => (
          <div key={index}>
            {row.map((reactEl, index2) => <span key={index2}>{reactEl} {' '}</span>)}
          </div>
        ))}
      </div>
    );
  }
}

Address.propTypes = {
  location: React.PropTypes.object,
  t: React.PropTypes.func.isRequired,
};

export default translate(['translation'])(Address);
