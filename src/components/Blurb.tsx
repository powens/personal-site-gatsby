import React from 'react';
import { Styled } from 'theme-ui';
import styled from '@emotion/styled';

const BlurbWrapper = styled.section`
  grid-area: blurb;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const Blurb = () => (
  <BlurbWrapper>
    <Styled.div>
      I{"'"}m a senior full-stack software engineer for a security company. I am
      a UI architecture specialist, mentor, webpack config wrangler, infosec
      enthusiast, HAM radio operator - VA7ORO, and{' '}
      <Styled.a href="https://twitter.com/planetside2/status/500821423091630081">
        occasional competitive game player
      </Styled.a>
      .
    </Styled.div>
    <Styled.div>
      I am a contributor to random open source projects, a volunteer technical
      mentor for{' '}
      <Styled.a href="https://www.canadalearningcode.ca/">
        Canada Learning Code
      </Styled.a>
      , and a volunteer radio operator for{' '}
      <Styled.a href="https://vectorradio.ca/">VECTOR</Styled.a>.
    </Styled.div>
  </BlurbWrapper>
);

export default Blurb;
