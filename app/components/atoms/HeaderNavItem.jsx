import React from 'react';
import { Link } from 'react-router';

class HeaderNavItem extends React.Component {
  render() {
    const { name, to, faIcon } = this.props;
    const className = faIcon ? `fa fa-${faIcon}` : '';
    return (
      <li {...this.props}>
        <Link activeClassName="active" onlyActiveOnIndex itemProp="url" to={to}>
          <span className={className} /> <span itemProp="name">{name}</span>
        </Link>
      </li>
    );
  }
}

HeaderNavItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  faIcon: React.PropTypes.string,
};

export default (HeaderNavItem);
