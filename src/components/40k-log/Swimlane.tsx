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
  border: 1px solid grey;
`;

function Swimlane(props: Props): ReactElement {
  const { steps, title } = props;
  return (
    <div>
      <Heading as="h3" sx={{ paddingBottom: '1rem' }}>
        {title}
      </Heading>
      {steps.map((d) => (
        <SwimlaneEntry step={d} key={d.name} />
      ))}
    </div>
  );
}

export default Swimlane;
