import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Tag from '../components/tags/Tag';

interface Tag {
  fieldValue: string;
  totalCount: number;
}
export interface Props {
  data: {
    allMarkdownRemark: {
      group: Array<Tag>;
    };
  };
}

function TagsPage(props: Props) {
  const group = props.data.allMarkdownRemark.group;
  // const numberCount = group.reduce(
  //   (accum, { totalCount }) => accum + totalCount,
  //   0
  // );

  return (
    <Layout>
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <Tag tag={tag.fieldValue} />
                {/* ({tag.totalCount}) */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
