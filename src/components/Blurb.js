import React from 'react';
import styled from '@emotion/styled';

const BlurbWrapper = styled.div`
  grid-area: blurb;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const Blurb = () => (
  <BlurbWrapper>
    I’m a full stack developer, infosec enthusiast, licensed HAM radio operator
    - VA7ORO, and{' '}
    <a href="https://twitter.com/planetside2/status/500821423091630081">
      occasional competitive game player
    </a>
    . I am a contributor to open source projects, a volunteer mentor for{' '}
    <a href="https://www.canadalearningcode.ca/">Canada Learning Code</a>, and a
    volunteer radio operator for <a href="https://vectorradio.ca/">VECTOR</a>.
  </BlurbWrapper>
);

export default Blurb;
