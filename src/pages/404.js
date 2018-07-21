import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import BlogCard from '../components/BlogCard';
import HelmetWrapper from '../components/HelmetWrapper';

class PageNotFound extends React.Component {
  static get propTypes() {
    return {
      route: PropTypes.object,
    };
  }

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
          Looks like you've followed a broken link, or entered a URL that doesn't exist on the site!
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
