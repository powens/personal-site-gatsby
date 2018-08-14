import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import HelmetWrapper from '../components/HelmetWrapper';

class PageNotFound extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const description = get(this, 'props.data.site.siteMetadata.description');

    return (
      <React.Fragment>
        <HelmetWrapper
          title={siteTitle}
          description={description}
        />
        <h1>
          Page not found!
        </h1>
        <p>
          {"Looks like you've followed a broken link, or entered a URL that doesn't exist on the site!"}
        </p>
        <p>
          <Link to="/">
            ← Back to my site
          </Link>
        </p>
      </React.Fragment>
    );
  }
}

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
