import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { withNamespaces } from 'react-i18next';
import routeTranslationKeyMap from '../../constants/lang/routeTranslationKeyMap';

class HeaderNavItem extends React.Component {
  render() {
    const { t, name, to, faIcon } = this.props;
    const className = faIcon ? `fa fa-${faIcon}` : '';

    // Use the name if provided, otherwise get the translation key belonging to the route
    // path and translate that.
    const displayName = name || t(routeTranslationKeyMap[to]);
    return (
      <Link activeClassName="active" className="navbar-item" itemProp="url" to={to}>
        <span className="icon">
          <i className={className} />
        </span>
        <span itemProp="name">{displayName}</span>
      </Link>
    );
  }
}

HeaderNavItem.propTypes = {
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  to: PropTypes.string.isRequired,
  faIcon: PropTypes.string,
};

export default withNamespaces(['translation'])(HeaderNavItem);
