import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import BlogCard from './BlogCard';
import { PostProps } from '../utils/types';

export interface Props {
  node: {
    frontmatter: PostProps;
    timeToRead: number;
  };
}

const PostList = styled.ul`
  list-style: none;
  margin-left: 0;
`;

const PostItem = styled.li`
  margin-bottom: 1.75rem;
`;

export interface Props {
  limit: number;
}

function LatestPosts({ limit = 5 }: Props) {
  const postQuery = graphql`
    query IndexQuery {
      allMarkdownRemark(
        limit: 5
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
      <h2>
        <Link to="/posts">Latest Posts</Link>
      </h2>
      <StaticQuery
        query={postQuery}
        render={data => {
          const posts = data.allMarkdownRemark.edges;
          return (
            <PostList>
              {posts.map(({ node: { frontmatter, timeToRead } }: Props) => (
                <PostItem key={frontmatter.path}>
                  <BlogCard
                    path={frontmatter.path}
                    title={frontmatter.title}
                    date={frontmatter.date}
                    computerDate={frontmatter.computerDate}
                    excerpt={frontmatter.excerpt}
                    timeToRead={timeToRead}
                  />
                </PostItem>
              ))}
            </PostList>
          );
        }}
      />
    </section>
  );
}

export default LatestPosts;
