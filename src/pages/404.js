import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PageNotFound = () => {
  return (
    <Layout>
      <SEO />
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
