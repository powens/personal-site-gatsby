import React from 'react';
import { Styled } from 'theme-ui';
import PostList from './PostList';
import { PostQuery } from '../utils/types';

export interface Props {
  posts: Array<PostQuery>;
}

function Posts({ posts }: Props): JSX.Element {
  return (
    <section>
      <Styled.h2>Posts</Styled.h2>
      <PostList posts={posts} />
    </section>
  );
}

export default Posts;
