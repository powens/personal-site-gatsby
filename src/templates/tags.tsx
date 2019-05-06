import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import BlogCard from '../components/BlogCard';
import Layout from '../components/Layout';

export interface Props {
  pageContext: object;
  data: object;
}

const PostList = styled.ul`
  list-style: none;
`;

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const postCount = `${totalCount} post${totalCount === 1 ? '' : 's'}`;

  const tagHeader = `${tag} - ${postCount}`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <section>
        <PostList>
          {edges.map(({ node }) => {
            const { path, title, date, excerpt } = node.frontmatter;
            const timeToRead = node.timeToRead;
            return (
              <li>
                <BlogCard
                  key={path}
                  path={path}
                  title={title}
                  date={date}
                  excerpt={excerpt}
                  timeToRead={timeToRead}
                />
              </li>
            );
          })}
        </PostList>
      </section>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
            excerpt
          }
          timeToRead
        }
      }
    }
  }
`;
