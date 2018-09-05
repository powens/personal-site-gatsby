import React from 'react';
import styled from 'react-emotion';

const BlurbWrapper = styled.div`
  grid-area: blurb;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Blurb = () => (
  <BlurbWrapper>
    Howdy! I am a full stack developer, with an interested in all things
    security. I am a basic with honours licensed HAM radio operator, callsign
    VA7ORO. I also play games competitively, and have
    <a href="https://twitter.com/planetside2/status/500821423091630081">
      &nbsp;won a tournament or two
    </a>
    .
  </BlurbWrapper>
);

export default Blurb;
