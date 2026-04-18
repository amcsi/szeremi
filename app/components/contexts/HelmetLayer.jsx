import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

/**
 * Layer handling the <head> section and the attributes of <html>
 */
class HelmetLayer extends React.Component {
  render() {
    const { state, children } = this.props;
    const links = [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/1.4.0/css/flag-icon.min.css',
      },
    ];

    return (
      <div>
        <Helmet
          // Current page name.
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
        />
        { children }
      </div>
    );
  }
}

HelmetLayer.propTypes = {
  t: PropTypes.func.isRequired,
  pathname: PropTypes.string,
  state: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(withNamespaces(['translation'])(HelmetLayer));
