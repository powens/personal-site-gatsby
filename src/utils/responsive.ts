import { css, SerializedStyles } from '@emotion/react';

interface Breakpoints {
  [key: string]: (cls: SerializedStyles) => any;
}

interface BreakpointValues {
  [key: string]: number;
}

const breakpoints: BreakpointValues = {
  medium: 768,
  small: 425,
};

const mq: Breakpoints = Object.keys(breakpoints).reduce(
  (accumulator: Breakpoints, label: string) => {
    const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
    const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
    accumulator[label] = (cls) =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `;
    return accumulator;
  },
  {}
);

export default mq;
