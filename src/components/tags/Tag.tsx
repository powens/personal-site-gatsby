import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const TagWrapper = styled.span`
  background: var(--highlight);
  border-radius: 0.3rem;
  padding: 0.4rem;
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
