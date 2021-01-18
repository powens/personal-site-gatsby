import React from 'react';
import styled from '@emotion/styled';
import BlogCard from './BlogCard';
import { PostProps } from '../utils/types';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

const PostItem = styled.li`
  margin-bottom: 2rem;
`;

export interface Props {
  posts: Array<PostProps>;
}

export default function PostList({ posts }: Props): JSX.Element {
  return (
    <List>
      {posts.map((node) => {
        // TODO: Hack to work for both gatsby-theme-blog-core changes, as well as default changes
        const post = node.node || node;
        return (
          <PostItem key={post.slug}>
            <BlogCard
              slug={post.slug}
              title={post.title}
              date={post.date}
              computerDate={post.computerDate}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          </PostItem>
        );
      })}
    </List>
  );
}
