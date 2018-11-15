import React from 'react';
import { FaMoon } from 'react-icons/fa';
import styled from 'react-emotion';
import { toggleColorScheme } from '../utils/colors';

const StyledButton = styled.button`
  font-size: 1.5rem;
  background: none !important;
  color: var(--primary);
  border: none;
  padding: 0 !important;
  font: inherit;
  cursor: pointer;
`;

function DarkButton() {
  return (
    <StyledButton type="button" onClick={toggleColorScheme} title="Dark Mode">
      <FaMoon />
    </StyledButton>
  );
}

export default DarkButton;
