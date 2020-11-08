/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { Heading, Progress, jsx } from 'theme-ui';
// import ReactModal from 'react-modal';
import { ProgressStep } from './types';

interface Props {
  step: ProgressStep;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
`;

const NumberDisplay = styled.div``;

const Wrapper = styled.div`
  margin-bottom: 2rem;

  // cursor: pointer;
  &: hover {
    border: 1px solid var(--tagFg);
  }
`;

const Number = styled.span`
  font-weight: bold;
`;

const ModalStyles = {
  // color: 'hotpink',
  // width: '50vw',
  // top: '50%',
  // left: '50%',
  // right: 'auto',
  // bottom: 'auto',
  // marginRight: '-50%',
  // transform: 'translate(-50%, -50%)',
};

function SwimlaneEntry(props: Props): JSX.Element {
  const { name, numTotal, numDone, notes } = props.step;

  // const [modalOpen, setModalOpen] = useState(false);
  // const onModalOpen = useCallback(() => {
  //   setModalOpen(true);
  // }, [setModalOpen]);
  // const onModalClose = useCallback(() => {
  //   setModalOpen(false);
  // }, [setModalOpen]);

  return (
    <Wrapper>
      <Header>
        <Heading as="h4">{name}</Heading>
        <NumberDisplay>
          <Number>{numDone}</Number>/
          <Number>{numTotal === -1 ? '???' : numTotal}</Number>
        </NumberDisplay>
      </Header>
      <Progress
        max={numTotal === -1 ? 100 : numTotal}
        value={numDone}
        style={{ height: '1rem' }}
      />
      {/* <Notes sx={{ color: 'secondary' }}>{notes}</Notes> */}
      {/* <ReactModal
        isOpen={modalOpen}
        onRequestClose={onModalClose}
        css={ModalStyles}
      >
        <h3>{name}</h3>
        <p>
          <Number>{numDone}</Number>/
          <Number>{numTotal === -1 ? '???' : numTotal}</Number>
        </p>
        <p>{notes}</p>
      </ReactModal> */}
    </Wrapper>
  );
}

export default SwimlaneEntry;
