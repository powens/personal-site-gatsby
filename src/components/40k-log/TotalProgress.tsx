import React, { useMemo } from 'react';
import { Styled } from 'theme-ui';
import Step from './Step';
import { ProgressStep } from './types';
import ProgressBar from './ProgressBar';

function totalStepCount(steps: Array<ProgressStep>) {
  let done = 0;
  let total = 0;

  steps.forEach((step) => {
    if (typeof step.numDone === 'number') {
      done += step.numDone;
    }
    if (typeof step.numTotal === 'number') {
      total += step.numTotal;
    }
  });

  return { done, total };
}

interface Props {
  steps: Array<ProgressStep>;
}

function TotalProgress(props: Props): JSX.Element {
  const { steps } = props;

  const totals = useMemo(() => totalStepCount(steps), [steps]);

  return (
    <section>
      <Styled.h3>Total Progress</Styled.h3>
      <Styled.ul>
        {steps.map((step) => (
          <Styled.li key={step.name}>
            <Step {...step} />
          </Styled.li>
        ))}
      </Styled.ul>
      <ProgressBar current={totals.done} total={totals.total} />
      Total: {totals.done} / {totals.total}
    </section>
  );
}

export default TotalProgress;
