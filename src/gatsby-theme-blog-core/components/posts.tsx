import React from 'react';
import { Styled } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import Blurb from '../../components/Blurb';
import LatestPosts from '../../components/LatestPosts';
import SkillsRotator from '../../components/SkillsRotator';
import SocialBlock from '../../components/SocialBlock';

const Header = styled.h1`
  font-size: 3.5rem;
  grid-area: header;

  justify-self: center;
`;

const Large = styled.div`
  margin-top: 1rem;
  font-size: 1.8rem;
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
        <Styled.hr />
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
