import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Tag from '../components/tags/Tag';

interface Tag {
  fieldValue: string;
  totalCount: number;
}
export interface Props {
  data: {
    allMdxBlogPost: {
      group: Array<Tag>;
    };
  };
}

const TagList = styled.ul`
  list-style-type: none;
`;

const TagListItem = styled.li`
  padding: 0.5rem;
`;

function TagsPage(props: Props) {
  const group = props.data.allMdxBlogPost.group;
  const numberCount = group.reduce(
    (accum, { totalCount }) => accum + totalCount,
    0
  );

  return (
    <Layout>
      <div>
        <h1>Tags</h1>
        <TagList>
          {group.map((tag) => (
            <TagListItem key={tag.fieldValue}>
              <Tag tag={tag.fieldValue} />
              {/* ({tag.totalCount}) */}
            </TagListItem>
          ))}
        </TagList>
      </div>
    </Layout>
  );
}

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    allMdxBlogPost(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
