import React, { ReactElement } from 'react';
import { Heading } from 'theme-ui';
import styled from '@emotion/styled';
import SwimlaneEntry from './SwimlaneEntry';
import { ProgressStep } from './types';

interface Props {
  steps: Array<ProgressStep>;
  title: string;
}

const Wrapper = styled.div`
  background-color: var(--theme-ui-colors-primary);
`;

function Swimlane(props: Props): ReactElement {
  const { steps, title } = props;
  return (
    <Wrapper>
      <Heading as="h3" sx={{ paddingBottom: '1rem' }}>
        {title}
      </Heading>
      {steps.map((d) => (
        <SwimlaneEntry step={d} key={d.name} />
      ))}
    </Wrapper>
  );
}

export default Swimlane;
