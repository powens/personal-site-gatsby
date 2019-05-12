import React from 'react';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import Speaking from '../components/Speaking';
import LatestPosts from '../components/LatestPosts';
import ProfilePicture from '../components/ProfilePicture';

const BlogIndex = () => {
  return (
    <Layout>
      <ProfilePicture />
      <Blurb />
      <LatestPosts limit={5} />
      <Speaking />
    </Layout>
  );
};

export default BlogIndex;
