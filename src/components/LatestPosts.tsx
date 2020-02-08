import React from 'react';
import { Styled } from 'theme-ui';
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
      allMdxBlogPost(limit: 10, sort: { fields: [date], order: DESC }) {
        edges {
          node {
            slug
            date(formatString: "DD MMMM, YYYY")
            computerDate: date(formatString: "YYYY-MM-DD")
            title
            excerpt
          }
        }
      }
    }
  `;

  return (
    <section>
      <Styled.h2>Latest Posts</Styled.h2>
      <StaticQuery
        query={postQuery}
        render={data => {
          const posts = data.allMdxBlogPost.edges;
          return <PostList posts={posts} />;
        }}
      />
    </section>
  );
}

export default LatestPosts;
