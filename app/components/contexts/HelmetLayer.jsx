import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';

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
          htmlAttributes={{ lang: state.currentLanguage }}
          meta={[
            {
              charSet: 'UTF-8',
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
          ]}
          link={links}
        />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(HelmetLayer);
