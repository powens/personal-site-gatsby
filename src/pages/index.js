import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import BlogCard from '../components/BlogCard';
import HelmetWrapper from '../components/HelmetWrapper';
import Layout from '../components/Layout';

class BlogIndex extends React.Component {
  static get propTypes() {
    return {
      route: PropTypes.object,
      location: PropTypes.object,
    };
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const description = get(this, 'props.data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location}>
        <HelmetWrapper
          title={siteTitle}
          description={description}
        />
        {posts.map((post) => {
          if (post.node.path !== '/404/') {
            return (
              <BlogCard
                key={post.node.frontmatter.path}
                path={post.node.frontmatter.path}
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.frontmatter.excerpt}
                titleImage={post.node.frontmatter.titleImage.childImageSharp}
              />
            );
          }
          return null;
        })}
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
                sizes(maxWidth: 700) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
