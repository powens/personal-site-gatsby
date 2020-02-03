import React from 'react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../../components/SEO';
import TagList from '../../components/tags/TagList';
import Layout from '../../components/Layout';
import { PostProps } from '../../utils/types';
import BlogFooter from '../../components/BlogFooter';
import EmphasisDescription from '../../components/EmphasisDescription';

const Label = styled.span`
  margin-right: 2rem;
  color: var(--secondaryBodyColor);
`;

const PostGrid = styled.section``;

export interface Props {
  data: {
    blogPost: PostProps;
  };
}

const Post = (props: Props) => {
  const {
    data: {
      blogPost: { body, title, tags, date, excerpt },
    },
  } = props;

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PostGrid>
        <h1>{title}</h1>
        <div>
          <Label>
            <time dateTime={date}>{date}</time>
          </Label>
          <TagList tags={tags} />
        </div>
        <MDXRenderer>{body}</MDXRenderer>
        <BlogFooter />
      </PostGrid>
    </Layout>
  );
};

export default Post;
