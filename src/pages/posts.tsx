import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { PostProps } from '../utils/types';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<PostProps>;
    };
  };
}

export default function Posts({ data }: Props) {
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
