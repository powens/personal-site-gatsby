import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import SEO from '../components/SEO';
import TagList from '../components/tags/TagList';
import Layout from '../components/Layout';
import { PostProps } from '../utils/types';
import BlogFooter from '../components/BlogFooter';
import EmphasisDescription from '../components/EmphasisDescription';

const Label = styled.span`
  margin-right: 2rem;
  color: var(--secondaryBodyColor);
`;

const PostGrid = styled.section`
  display: grid;
  grid-gap: 1.5rem;
`;

export interface Props {
  data: {
    markdownRemark: {
      frontmatter: PostProps;
      html: string;
      timeToRead: number;
    };
  };
}

const BlogPostTemplate = (props: Props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { tags, excerpt, title, date, computerDate },
        html,
        timeToRead,
      },
    },
  } = props;

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PostGrid>
        <h1>{title}</h1>
        <div>
          <Label>
            <time dateTime={computerDate}>{date}</time>
          </Label>
          <Label>
            <EmphasisDescription
              number={timeToRead}
              description="mins to read"
            />
          </Label>
          <TagList tags={tags} />
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <BlogFooter />
      </PostGrid>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        computerDate: date(formatString: "YYYY-MM-DD")
        tags
        excerpt
      }
    }
  }
`;
