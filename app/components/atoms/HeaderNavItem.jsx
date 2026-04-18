import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import routeTranslationKeyMap from '../../constants/lang/routeTranslationKeyMap';

class HeaderNavItem extends React.Component {
  render() {
    const { t, name, to, faIcon, onNavigate } = this.props;
    const className = faIcon ? `fas fa-${faIcon}` : '';

    // Use the name if provided, otherwise get the translation key belonging to the route
    // path and translate that.
    const displayName = name || t(routeTranslationKeyMap[to]);
    return (
      <NavLink
        className={({ isActive }) => `navbar-item${isActive ? ' active' : ''}`}
        itemProp="url"
        to={to}
        end={to === '/'}
        onClick={() => onNavigate?.()}
      >
        <span className="icon">
          <i className={className} />
        </span>
        <span itemProp="name">{displayName}</span>
      </NavLink>
    );
  }
}

export default withTranslation(['translation'])(HeaderNavItem);
