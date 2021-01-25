import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const PageNotFound = (): JSX.Element => {
  return (
    <Layout>
      <h1>Page not found!</h1>
      <section>
        {
          "Looks like you've followed a broken link, or entered a URL that doesn't exist on the site!"
        }
      </section>
      <p>
        <Link to="/">← Back to the site</Link>
      </p>
    </Layout>
  );
};

export default PageNotFound;
