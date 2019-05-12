import React from 'react';
import styled from '@emotion/styled';
import BlogCard from './BlogCard';
import { PostQuery } from '../utils/types';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`;

const PostItem = styled.li`
  margin-bottom: 4rem;
`;

export interface Props {
  posts: Array<PostProps>;
}

export default function PostList({ posts }: Props) {
  return (
    <List>
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
    </List>
  );
}
