import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { PostProps } from '../utils/types';
import Tag from '../components/tags/Tag';

export interface Props {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      edges: Array<PostProps>;
      totalCount: number;
    };
  };
}

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const postCount = `${totalCount} post${totalCount === 1 ? '' : 's'}`;

  const tagHeader = `${postCount}`;

  return (
    <Layout>
      <h1>All posts for {tag}</h1>
      <section>
        <PostList posts={edges} />
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
            computerDate: date(formatString: "YYYY-MM-DD")
            excerpt
          }
          timeToRead
        }
      }
    }
  }
`;
