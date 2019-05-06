import React from 'react';
import styled from '@emotion/styled';

const BlurbWrapper = styled.section`
  grid-area: blurb;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const Blurb = () => (
  <BlurbWrapper>
    <p>Howdy!</p>
    <p>
      I am a senior full-stack software engineer for a Canadian-based security
      company. I am a UI architecture specialist, mentor, webpack config
      wrangler, infosec enthusiast, licensed HAM radio operator - VA7ORO, and{' '}
      <a href="https://twitter.com/planetside2/status/500821423091630081">
        occasional competitive game player
      </a>
      . I like to write about all these topics, and more.
    </p>
    <p>
      I am a contributor to open source projects, a volunteer technical mentor
      for <a href="https://www.canadalearningcode.ca/">Canada Learning Code</a>,
      and a volunteer radio operator for{' '}
      <a href="https://vectorradio.ca/">VECTOR</a>.
    </p>
  </BlurbWrapper>
);

export default Blurb;
