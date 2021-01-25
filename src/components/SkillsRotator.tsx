/** @jsx jsx */
import { jsx } from '@emotion/react';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';

const itemWaitMs = 5000;

const tags = [
  'Full-stack fanatic',
  'Technical tutor',
  'Infosec enthusiast',
  'HAM radio resider',
  'Web architecture ace',
  'React rocker',
  'Webpack wrangler',
  'Pythonista',
  'Dog devotee',
  'Bicycle buff',
  'Trumpet trouper',
];

const transitionItem = {
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  willChange: 'transform, opacity, height',
  whiteSpace: 'nowrap',
  lineHeight: '80px',
};

function SkillsRotator(): JSX.Element {
  const ref = useRef([]);
  const [items, set] = useState([[tags[0]]]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
    },
    enter: {
      opacity: 1,
      height: 80,
      innerHeight: 80,
    },
    leave: { innerHeight: 0, height: 0, opacity: 0 },
    // update: { color: '#28b4d7' },
  });

  const clearAll = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
  }, []);

  const reset = useCallback(() => {
    clearAll();
    tags.forEach((tag, index) => {
      ref.current.push(setTimeout(() => set([tag]), itemWaitMs * index));
    });
    ref.current.push(setTimeout(() => reset(), itemWaitMs * tags.length));
  }, [clearAll]);

  useEffect(() => reset(), [reset]);

  return (
    <div style={{ height: '80px' }}>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div css={transitionItem} key={key} style={rest}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default SkillsRotator;
