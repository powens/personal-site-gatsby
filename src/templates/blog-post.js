import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import HelmetWrapper from '../components/HelmetWrapper';
import TagList from '../components/TagList';
import Layout from '../components/Layout';

const Label = styled.span`
  margin-right: 2rem;
`;

const BlogPostTemplate = props => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { tags, excerpt, title, date },
        html,
        timeToRead,
      },
      site: {
        siteMetadata: { title: siteTitle },
      },
    },
  } = props;

  return (
    <Layout>
      <HelmetWrapper title={`${title} | ${siteTitle}`} description={excerpt} />
      <h1>{title}</h1>
      <p>
        <Label>{date}</Label>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <Label>{timeToRead} min read</Label>
      </p>
      <div>
        <TagList tags={tags} />
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
      timeToRead: PropTypes.number,
      html: PropTypes.string,
    }),
  }).isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
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
        tags
        excerpt
      }
    }
  }
`;
