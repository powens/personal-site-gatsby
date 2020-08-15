import React, { useMemo } from 'react';
import { Progress, Heading } from 'theme-ui';
import { ProgressStep } from './types';
import ProgressPool from './ProgressPool';

function totalStepCount(steps: Array<ProgressStep>) {
  let done = 0;
  let total = 0;

  steps.forEach((step) => {
    if (step.numTotal === -1) {
      return;
    }

    if (typeof step.numDone === 'number') {
      done += step.numDone;
    }
    if (typeof step.numTotal === 'number') {
      total += step.numTotal;
    }
  });

  return { done, total, percent: Math.round((done / total) * 100) };
}

interface Props {
  steps: Array<ProgressStep>;
}

function ProjectProgress(props: Props): JSX.Element {
  const { steps } = props;
  const totals = useMemo(() => totalStepCount(steps), [steps]);

  return (
    <section>
      <Heading as="h2" style={{ marginBottom: '1rem' }}>
        Total Progress: {totals.done} / {totals.total} ({totals.percent}%)
      </Heading>
      <Progress
        max={totals.total}
        value={totals.done}
        style={{ height: '1rem' }}
      />

      <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
        <ProgressPool steps={steps} />
      </div>
    </section>
  );
}

export default ProjectProgress;
