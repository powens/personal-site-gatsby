import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const TagWrapper = styled.span`
  background: var(--tagBg);
  color: var(--tagFg);
  border-radius: 0.3rem;
  padding: 0.4rem;

  transition: background 0.1s ease-in;
  &:hover {
    background: var(--tagBgHover);
  }
`;

export interface Props {
  tag: string;
}

export default function Tag({ tag }: Props) {
  return (
    <Link to={`/tags/${tag}/`}>
      <TagWrapper>{tag}</TagWrapper>
    </Link>
  );
}
