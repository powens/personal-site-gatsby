import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { PostProps } from '../utils/types';
import PostList from './PostList';

export interface Props {
  node: {
    frontmatter: PostProps;
    timeToRead: number;
  };
}

function LatestPosts() {
  const postQuery = graphql`
    query IndexQuery {
      allMarkdownRemark(
        limit: 10
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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

  return (
    <section>
      <h2>Latest Posts</h2>
      <StaticQuery
        query={postQuery}
        render={data => {
          const posts = data.allMarkdownRemark.edges;
          return <PostList posts={posts} />;
        }}
      />
    </section>
  );
}

export default LatestPosts;
