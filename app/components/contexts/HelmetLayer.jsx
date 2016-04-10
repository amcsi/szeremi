import React from 'react';
import Helmet from 'react-helmet';
import routeTranslationKeyMap from '../../constants/lang/routeTranslationKeyMap';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

class HelmetLayer extends React.Component {
  render() {
    const { pathname, t, children } = this.props;
    return (
      <div>
        <Helmet
          // Current page name.
          title={t(routeTranslationKeyMap[pathname])}
          titleTemplate="Attila Szeremi - %s"
          defaultTitle="Attila Szeremi"
          meta={[
            {
              name: 'keywords',
              content: 'Attila Szeremi portfolio cv resume about php javascript react' +
               ' contract freelance',
            },
            {
              name: 'description',
              content: "Welcome to Attila Szeremi's personal homepage",
            },
          ]}
        />
        { children }
      </div>
    );
  }
}

HelmetLayer.propTypes = {
  t: React.PropTypes.func.isRequired,
  pathname: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

function mapStateToProps({ routing }) {
  return {
    pathname: routing.locationBeforeTransitions.pathname,
  };
}

export default connect(mapStateToProps)(translate(['translation'])(HelmetLayer));
