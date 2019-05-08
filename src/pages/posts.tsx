import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

export default function Posts({ data }) {
  return (
    <Layout>
      <h2>All posts</h2>
      <PostList posts={data.allMarkdownRemark.edges} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            computerDate: date(formatString: "YYYY-MM-DD")
            title
            excerpt
          }
          timeToRead
        }
      }
    }
  }
`;
