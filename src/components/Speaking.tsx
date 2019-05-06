import React from 'react';
import styled from '@emotion/styled';
import SpeakingCard from './SpeakingCard';

const SpeakingList = styled.ul`
  list-style: none;
`;

const SpeakingItem = styled.li``;

function Speaking() {
  return (
    <section>
      <h2>Speaking</h2>
      <SpeakingList>
        <SpeakingItem>
          <SpeakingCard
            title="Intro to CSS Grid"
            slidesUrl="https://powens.github.io/cssgrid/#/"
            description="My first technical talk. A 10-minute presentation about the history of CSS layouts, and a
            dive into CSS grid."
            presentedAt="Internal company training"
          />
        </SpeakingItem>
      </SpeakingList>
    </section>
  );
}

export default Speaking;
