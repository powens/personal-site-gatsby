import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/Layout';
import HelmetWrapper from '../components/HelmetWrapper';

const PageNotFound = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const description = get(props, 'data.site.siteMetadata.description');

  return (
    <Layout>
      <HelmetWrapper title={siteTitle} description={description} />
      <h1>Page not found!</h1>
      <p>
        {
          "Looks like you've followed a broken link, or entered a URL that doesn't exist on the site!"
        }
      </p>
      <p>
        <Link to="/">← Back to my site</Link>
      </p>
    </Layout>
  );
};

export default PageNotFound;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
