import React from 'react';
import styled from '@emotion/styled';
import SpeakingCard from './SpeakingCard';

const SpeakingList = styled.ul`
  list-style: none;
  margin-left: 0;
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
            description="A 10-minute presentation about the history of CSS layouts, and a
            dive into CSS grid."
            presentedAt="Internal company training"
          />
        </SpeakingItem>
      </SpeakingList>
    </section>
  );
}

export default Speaking;
