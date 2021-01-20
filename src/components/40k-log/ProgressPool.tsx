import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { ProgressStep } from './types';
import Swimlane from './Swimlane';

const Pool = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  overflow-x: auto;
`;

function collateSteps(steps: Array<ProgressStep>) {
  const out: Record<string, Array<ProgressStep>> = {
    start: [],
    assembled: [],
    paint: [],
    done: [],
  };

  steps.forEach((step) => {
    const status = step.status;
    out[status].push(step);
  });

  return out;
}

interface Props {
  steps: Array<ProgressStep>;
}

function ProgressPool(props: Props): JSX.Element {
  const { steps } = props;
  const { start, assembled, paint, done } = useMemo(() => collateSteps(steps), [
    steps,
  ]);

  return (
    <Pool>
      <Swimlane steps={start} title="Start"></Swimlane>
      <Swimlane steps={assembled} title="Assembled"></Swimlane>
      <Swimlane steps={paint} title="Painting"></Swimlane>
      <Swimlane steps={done} title="Done"></Swimlane>
    </Pool>
  );
}

export default ProgressPool;
