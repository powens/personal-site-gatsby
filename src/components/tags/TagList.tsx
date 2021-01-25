import React from 'react';
import styled from '@emotion/styled';
import Tag from './Tag';

const Tags = styled.ul`
  display: inline-block;
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;

  li {
    display: inline;
    margin-right: 1rem;
  }
`;

export interface Props {
  tags: Array<string>;
}

const TagList = ({ tags }: Props): JSX.Element => (
  <Tags>
    {tags.map((tag) => (
      <li key={tag}>
        <Tag tag={tag} />
      </li>
    ))}
  </Tags>
);

export default TagList;
