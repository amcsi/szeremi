import React from 'react';
import { Link } from 'react-router';
import { translate } from 'react-i18next';
import routeTranslationKeyMap from '../../constants/lang/routeTranslationKeyMap';

class HeaderNavItem extends React.Component {
  render() {
    const { t, name, to, faIcon } = this.props;
    const className = faIcon ? `fa fa-${faIcon}` : '';

    // Use the name if provided, otherwise get the translation key belonging to the route
    // path and translate that.
    const displayName = name || t(routeTranslationKeyMap[to]);
    return (
      <li {...this.props}>
        <Link activeClassName="active" onlyActiveOnIndex itemProp="url" to={to}>
          <span className={className} /> <span itemProp="name">{displayName}</span>
        </Link>
      </li>
    );
  }
}

HeaderNavItem.propTypes = {
  t: React.PropTypes.func.isRequired,
  name: React.PropTypes.string,
  to: React.PropTypes.string.isRequired,
  faIcon: React.PropTypes.string,
};

export default translate(['translation'])(HeaderNavItem);
