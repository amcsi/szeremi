import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteMetadata = {
  title: 'Attila Szeremi',
  description: "Welcome to Attila Szeremi's personal homepage",
  author: '@amcsi',
};

/**
 * Per-page head tags. Document title is set here in full (`Site - Page`) so it
 * stays correct on client navigations; react-helmet-async does not apply a parent
 * titleTemplate to a nested Helmet’s title reliably.
 *
 * Global lang, charset, viewport, and keywords live in HelmetLayer.
 */
export default function Seo({
  description = '',
  meta = [],
  title = '',
}) {
  const metaDescription = description || siteMetadata.description;
  const fullTitle = title
    ? `${siteMetadata.title} - ${title}`
    : siteMetadata.title;

  return (
    <Helmet
      title={fullTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: fullTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: fullTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}
