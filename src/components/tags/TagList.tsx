import React from 'react';
import styled from '@emotion/styled';
import Tag from './Tag';

const Tags = styled.ul`
  display: inline-block;
  list-style-type: none;
  margin-left: 0;

  li {
    display: inline;
    margin-right: 1rem;
  }
`;

export interface Props {
  tags: Array<string>;
}

const TagList = ({ tags }: Props) => (
  <Tags>
    {tags.map(tag => (
      <li>
        <Tag key={tag} tag={tag} />
      </li>
    ))}
  </Tags>
);

export default TagList;
