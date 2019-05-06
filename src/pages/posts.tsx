import React from 'react';
import Layout from '../components/Layout';
import LatestPosts from '../components/LatestPosts';

export default function Posts() {
  return (
    <Layout>
      <LatestPosts limit={null} />
    </Layout>
  );
}
