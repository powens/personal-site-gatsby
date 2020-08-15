/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { Heading, Progress, jsx } from 'theme-ui';
import { ProgressStep } from './types';

interface Props {
  step: ProgressStep;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
`;

const NumberDisplay = styled.div``;

const Wrapper = styled.div`
  margin-bottom: 2rem;

  // cursor: pointer;
  // &: hover {
  //   border: 1px solid red;
  // }
`;

const Number = styled.span`
  font-weight: bold;
`;

function SwimlaneEntry(props: Props): JSX.Element {
  const { name, numTotal, numDone, notes } = props.step;
  return (
    <Wrapper>
      <Header>
        <Heading as="h4">{name}</Heading>
        <NumberDisplay>
          <Number>{numDone}</Number>/
          <Number>{numTotal === -1 ? '???' : numTotal}</Number>
        </NumberDisplay>
      </Header>
      <Progress
        max={numTotal === -1 ? 100 : numTotal}
        value={numDone}
        style={{ height: '1rem' }}
      />
      {/* <Notes sx={{ color: 'secondary' }}>{notes}</Notes> */}
    </Wrapper>
  );
}

export default SwimlaneEntry;
