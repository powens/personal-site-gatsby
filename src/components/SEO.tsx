import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import favicon32 from '../assets/favicon-32x32.png';
import favicon16 from '../assets/favicon-16x16.png';
import appleTouchIcon from '../assets/apple-touch-icon.png';
import safariPinnedTab from '../assets/safari-pinned-tab.svg';

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

interface Props {
  title?: string;
  description?: string;
  keywords?: Array<string>;
}

function SEO({ title, description, keywords }: Props) {
  const { site } = useStaticQuery(detailsQuery);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />

      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords.join(',')} />}

      {/* favicon stuff */}
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="mask-icon" href={safariPinnedTab} color="hsl(216, 69%, 49%)" />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <meta name="theme-color" content="hsl(216, 69%, 49%)" />
      <meta name="msapplication-TileColor" content="hsl(216, 69%, 49%)" />

      {/* RSS Feed */}
      <link rel="alternative" type="application/rss+xml" href="/rss.xml" />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@padraigcodes" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default SEO;
