import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon32 from '../assets/favicon-32x32.png';
import favicon16 from '../assets/favicon-16x16.png';
import appleTouchIcon from '../assets/apple-touch-icon.png';
import safariPinnedTab from '../assets/safari-pinned-tab.svg';
import { defaultColors } from '../utils/colors';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

interface SEOQuery {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: SEOQuery) => (
  <StaticQuery
    query={detailsQuery}
    render={data => (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={title}
        defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        lang="en"
      >
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={description || data.site.siteMetadata.description}
        />

        {/* favicon stuff */}
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link
          rel="mask-icon"
          href={safariPinnedTab}
          color={defaultColors.primary}
        />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <meta name="theme-color" content={defaultColors.primary} />
        <meta name="msapplication-TileColor" content={defaultColors.primary} />

        {/* RSS Feed */}
        <link rel="alternative" type="application/rss+xml" href="/rss.xml" />

        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />

        {/* /!* Twitter Card tags *!/ */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={'@padraigcodes'} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    )}
  />
);

export default SEO;
