import React from 'react';
import styled from '@emotion/styled';
import ProfilePicture from './ProfilePicture';
import SocialBlock from './SocialBlock';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'pic blurb'
    'pic social';

  padding: 1rem;

  // border: 1px solid var(--border);
  border-radius: 0.3rem;
  margin: 0.5rem;
  box-shadow: var(--shadow);
`;

const Blurb = styled.div`
  grid-area: blurb;
`;

export default function FooterBlurb() {
  return (
    <Wrapper>
      <ProfilePicture />
      <Blurb>
        Patrick is a full-stack software engineer. He is a UI architecture
        specialst, infosec enthusiast, and mentor.
      </Blurb>
      <SocialBlock />
    </Wrapper>
  );
}
