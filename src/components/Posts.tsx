import React from 'react';
import { Themed } from 'theme-ui';
import PostList from './PostList';
import { PostQuery } from '../utils/types';

export interface Props {
  posts: Array<PostQuery>;
}

function Posts({ posts }: Props): JSX.Element {
  return (
    <section>
      <Themed.h2>Posts</Themed.h2>
      <PostList posts={posts} />
    </section>
  );
}

export default Posts;
