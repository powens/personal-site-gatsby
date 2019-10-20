import React from 'react';
import styled from '@emotion/styled';

const BlurbWrapper = styled.section`
  grid-area: blurb;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const Blurb = () => (
  <BlurbWrapper>
    <p>
      I{"'"}m a senior full-stack software engineer for a security company. I am
      a UI architecture specialist, mentor, webpack config wrangler, infosec
      enthusiast, HAM radio operator - VA7ORO, and{' '}
      <a href="https://twitter.com/planetside2/status/500821423091630081">
        occasional competitive game player
      </a>
      .
    </p>
    <p>
      I am a contributor to random open source projects, a volunteer technical
      mentor for{' '}
      <a href="https://www.canadalearningcode.ca/">Canada Learning Code</a>, and
      a volunteer radio operator for{' '}
      <a href="https://vectorradio.ca/">VECTOR</a>.
    </p>
  </BlurbWrapper>
);

export default Blurb;
