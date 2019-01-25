import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import BlogCard from '../components/BlogCard';
import HelmetWrapper from '../components/HelmetWrapper';
import Layout from '../components/Layout';

const BlogIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const description = get(props, 'data.site.siteMetadata.description');
  const posts = get(props, 'data.allMarkdownRemark.edges');

  return (
    <Layout isLandingPage>
      <HelmetWrapper title={siteTitle} description={description} />
      {posts.map(({ node: { frontmatter } }) => (
        <BlogCard
          key={frontmatter.path}
          path={frontmatter.path}
          title={frontmatter.title}
          date={frontmatter.date}
          excerpt={frontmatter.excerpt}
        />
      ))}
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                path: PropTypes.string,
                title: PropTypes.string,
                date: PropTypes.string,
                excerpt: PropTypes.string,
              }),
            }),
          })
        ),
      }),
    }),
  }).isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
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
  }
`;
