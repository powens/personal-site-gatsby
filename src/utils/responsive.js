import { css } from 'emotion';

const breakpoints = {
  medium: 768,
};

const mq = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
    const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
    // eslint-disable-next-line no-param-reassign
    accumulator[label] = cls =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `;
    return accumulator;
  },
  {},
);

export default mq;
