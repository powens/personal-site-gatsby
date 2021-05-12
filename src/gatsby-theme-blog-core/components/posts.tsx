import React from 'react';
import { Themed } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import Blurb from '../../components/Blurb';
import Posts from '../../components/Posts';
import SkillsRotator from '../../components/SkillsRotator';
import SocialBlock from '../../components/SocialBlock';
import { PostQuery } from '../../utils/types';

const Header = styled.h1`
  font-size: 3.5rem;
  grid-area: header;

  justify-self: center;
`;

const Large = styled.div`
  margin-top: 1rem;
  font-size: 2.5rem;
  fontweight: 800;
  line-height: 80px;
`;

const Centered = styled.div`
  display: grid;

  grid-template-areas:
    'header'
    'social';
`;

interface Props {
  location: string;
  data: {
    allBlogPost: {
      nodes: Array<PostQuery>;
    };
  };
}

const BlogIndex = ({ data }: Props): React.ReactNode => {
  const { allBlogPost } = data;

  return (
    <Layout header={false}>
      <Centered>
        <Header>Patrick Owens</Header>
        <SocialBlock />
        <Themed.hr />
      </Centered>
      <Large>
        <SkillsRotator />
      </Large>
      <Blurb />
      <Posts posts={allBlogPost.nodes} />
    </Layout>
  );
};

export default BlogIndex;
