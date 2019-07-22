import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import LatestPosts from '../components/LatestPosts';
import SkillsRotator from '../components/SkillsRotator';
import SocialBlock from '../components/SocialBlock';

const Header = styled.h1`
  font-size: 3.5rem;
  grid-area: header;

  justify-self: center;
`;

const Divider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 0.15rem;
`;

const Large = styled.div`
  margin-top: 1rem;
  font-size: 1.6rem;
  fontweight: 800;
  line-height: 80px;
`;

const Centered = styled.div`
  display: grid;

  grid-template-areas:
    'header'
    'social';
`;

const BlogIndex = () => {
  return (
    <Layout header={false}>
      <Centered>
        <Header>Patrick Owens</Header>
        <SocialBlock />
        <Divider />
      </Centered>
      <Large>
        <SkillsRotator />
      </Large>
      <Blurb />
      <LatestPosts />
    </Layout>
  );
};

export default BlogIndex;
