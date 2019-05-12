import React from 'react';
import styled from '@emotion/styled';

export interface Props {
  title: string;
  slidesUrl: string;
  description: string;
  presentedAt: string;
}

const Title = styled.h3`
  margin-bottom: 0.2rem;
`;

const SecondaryText = styled.span`
  color: var(--secondaryBodyColor);
`;

function SpeakingCard({ title, slidesUrl, description, presentedAt }: Props) {
  return (
    <React.Fragment>
      <Title>
        <a href={slidesUrl}>{title}</a>
      </Title>
      <SecondaryText>{presentedAt}</SecondaryText>
      <summary>{description}</summary>
    </React.Fragment>
  );
}

export default SpeakingCard;
