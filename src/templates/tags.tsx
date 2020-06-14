import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { PostProps } from '../utils/types';

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
  const { edges, totalCount } = data.allMdxBlogPost;

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
    allMdxBlogPost(
      limit: 2000
      sort: { fields: [date], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          title
          slug
          date(formatString: "DD MMMM, YYYY")
          computerDate: date(formatString: "YYYY-MM-DD")
          excerpt
          tags
        }
      }
    }
  }
`;
