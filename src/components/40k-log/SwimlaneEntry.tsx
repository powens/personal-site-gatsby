/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { Heading, Text, Progress, Divider, jsx } from 'theme-ui';
import { ProgressStep } from './types';

interface Props {
  step: ProgressStep;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberDisplay = styled.div``;

const Wrapper = styled.div`
  border: 1px solid var(--border);
  margin-bottom: 1rem;
`;

const Number = styled.span`
  font-weight: bold;
`;

const Notes = styled.div`
  font-size: 0.8rem;
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
      <Notes sx={{ color: 'secondary' }}>{notes}</Notes>
      <Progress max={numTotal} value={numDone} style={{ height: '1rem' }} />
    </Wrapper>
  );
}

export default SwimlaneEntry;
