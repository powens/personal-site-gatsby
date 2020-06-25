import React from 'react';
import { ProgressStep } from './types';

function Step(props: ProgressStep): JSX.Element {
  const total = props.numTotal === -1 ? '???' : props.numTotal;
  return (
    <>
      {props.numDone} / {total} - {props.name}{' '}
      {props.notes ? <>({props.notes})</> : null}
    </>
  );
}

export default Step;
