import React from 'react';
import Helmet from 'react-helmet';
import routeTranslationKeyMap from '../../constants/lang/routeTranslationKeyMap';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

/**
 * Layer handling the <head> section and the attributes of <html>
 */
class HelmetLayer extends React.Component {
  render() {
    const { pathname, state, t, children } = this.props;
    const links = [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/1.4.0/css/flag-icon.min.css',
      },
    ];

    const scripts = [];
    if (__SERVER__) {
      // Google analytics script tag.
      const gaTrackingId = process.env.SZEREMI_GA_TRACKING_ID;
      if (gaTrackingId) {
        const gaTemplate = require('raw!../../content/ga.js');
        scripts.push({ innerHTML: gaTemplate.replace('{{ gaTrackingId }}', gaTrackingId) });
      }
      scripts.push({ innerHTML: `state = ${JSON.stringify(state)};` });
    }
    if (__PRODUCTION__) {
      links.push({ rel: 'stylesheet', href: '/build/styles.css' });
    }
    return (
      <div>
        <Helmet
          // Current page name.
          title={t(routeTranslationKeyMap[pathname])}
          titleTemplate="Attila Szeremi - %s"
          defaultTitle="Attila Szeremi"
          htmlAttributes={{ lang: state.currentLanguage }}
          meta={[
            {
              charset: 'UTF-8',
            },
            {
              name: 'keywords',
              content: 'Attila Szeremi portfolio cv resume about php javascript react' +
               ' contract freelance',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            },
            {
              name: 'description',
              content: "Welcome to Attila Szeremi's personal homepage",
            },
          ]}
          link={links}
          script={scripts}
        />
        { children }
      </div>
    );
  }
}

HelmetLayer.propTypes = {
  t: React.PropTypes.func.isRequired,
  pathname: React.PropTypes.string,
  state: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  const { locationBeforeTransitions, serverPathname } = state.routing;
  return {
    pathname: locationBeforeTransitions ? locationBeforeTransitions.pathname : serverPathname,
    state,
  };
}

export default connect(mapStateToProps)(translate(['translation'])(HelmetLayer));
