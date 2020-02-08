/** @jsx jsx **/

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../../components/SEO';
import TagList from '../../components/tags/TagList';
import Layout from '../../components/Layout';
import { PostProps } from '../../utils/types';
import BlogFooter from '../../components/BlogFooter';

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
      <main>
        <Styled.h1>{title}</Styled.h1>
        <Styled.div
          sx={{
            marginBottom: '2rem',
          }}
        >
          <span
            sx={{
              marginRight: '2rem',
              color: 'muted',
            }}
          >
            <time dateTime={date}>{date}</time>
          </span>
          <TagList tags={tags} />
        </Styled.div>
        <MDXRenderer>{body}</MDXRenderer>
      </main>
      <BlogFooter />
    </Layout>
  );
};

export default Post;
