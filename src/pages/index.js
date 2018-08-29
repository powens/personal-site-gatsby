import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import BlogCard from '../components/BlogCard';
import HelmetWrapper from '../components/HelmetWrapper';
import Layout from '../components/Layout';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const description = get(this, 'props.data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

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
            titleImage={frontmatter.titleImage.childImageSharp}
          />
        ))}
      </Layout>
    );
  }
}

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
            titleImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
