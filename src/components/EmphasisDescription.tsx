import React from 'react';
import styled from '@emotion/styled';

const Description = styled.span`
  grid-area: ttr;
  color: var(--secondaryBodyColor);
`;

const Emphasis = styled.span`
  color: var(--bodyColor);
  font-weight: 600;
`;

export interface Props {
  number: string | number;
  description: string;
}

export default function EmphasisDescription({ number, description }: Props) {
  return (
    <Description>
      <Emphasis>{number}</Emphasis> {description}
    </Description>
  );
}
