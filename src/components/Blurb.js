import React from 'react';
import styled, { css } from 'react-emotion';

const BlurbWrapper = styled.div`
  grid-area: blurb;
`;


const Blurb = () => (
  <BlurbWrapper>
    <p>
      Howdy, I am a full stack developer, with an interested in all things security.
      I am a basic with honours licensed HAM radio operator, callsign VA7ORO.
      I also play games competitively, and have <a href="https://twitter.com/planetside2/status/500821423091630081">won a tournament or two</a>.
    </p>
  </BlurbWrapper>
);

export default Blurb;
