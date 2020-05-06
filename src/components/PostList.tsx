import React from 'react';
import styled from '@emotion/styled';
import BlogCard from './BlogCard';
import { PostQuery } from '../utils/types';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

const PostItem = styled.li`
  margin-bottom: 2rem;
`;

export interface Props {
  posts: Array<PostQuery>;
}

export default function PostList({ posts }: Props) {
  return (
    <List>
      {posts.map(({ node }) => (
        <PostItem key={node.slug}>
          <BlogCard
            slug={node.slug}
            title={node.title}
            date={node.date}
            computerDate={node.computerDate}
            excerpt={node.excerpt}
            tags={node.tags}
          />
        </PostItem>
      ))}
    </List>
  );
}
