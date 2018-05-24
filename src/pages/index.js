import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import BlogCard from '../components/BlogCard';

class BlogIndex extends React.Component {
  static get propTypes() {
    return {
      route: PropTypes.object,
    };
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <React.Fragment>
        <Helmet title={siteTitle} />
        {posts.map((post) => {
          if (post.node.path !== '/404/') {
            return (
              <BlogCard
                key={post.node.frontmatter.path}
                path={post.node.frontmatter.path}
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.frontmatter.excerpt}
                titleImage={post.node.frontmatter.titleImage}
              />
            );
          }
          return null;
        })}
      </React.Fragment>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery($imageId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            excerpt
          }
        }
      }
    }
    titleImage: imageSharp(id: $imageId) {
      resolutions(width: 400) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
