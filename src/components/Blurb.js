import React from 'react';
import styled, { css } from 'react-emotion';

const BlurbWrapper = styled.div`
  grid-area: blurb;
`;


const Blurb = () => (
  <BlurbWrapper>
    <p>
      Howdy, I'm Patrick Owens.
    </p>
    <p>
      I am a full stack developer, with a special interest in infosec and all things security.
      I am a basic with honours licensed HAM radio operator, callsign VA7ORO.
    </p>
  </BlurbWrapper>
);

export default Blurb;
