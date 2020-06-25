import React from 'react';
import styled from '@emotion/styled';

interface Props {
  total: number;
  current: number;
}

const Background = styled.div`
  height: 1rem;
  background-color: #e9ecef;
  overflow: hidden;
  border-radius: 0.25rem;
  line-height: 0;
`;

const Progress = styled.div`
  background-image: linear-gradient(
    45deg,
    hsla(0, 0%, 100%, 0.15) 25%,
    transparent 0,
    transparent 50%,
    hsla(0, 0%, 100%, 0.15) 0,
    hsla(0, 0%, 100%, 0.15) 75%,
    transparent 0,
    transparent
  );
  background-size: 1rem 1rem;
  background-color: #28a745 !important;
  height: 100%;
  transition: width 0.6s ease;
  text-align: center;
`;

function ProgressBar(props: Props): JSX.Element {
  const percentage = (props.current / props.total) * 100;
  return (
    <Background>
      <Progress style={{ width: `${percentage}%` }} />
    </Background>
  );
}

export default ProgressBar;
