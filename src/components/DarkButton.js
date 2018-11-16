import React from 'react';
import PropTypes from 'prop-types';
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

  &:hover {
    color: var(--bodyColor);
  }
`;

function DarkButton({ onToggleTheme }) {
  const onClick = () => {
    toggleColorScheme();
    onToggleTheme();
  };

  return (
    <StyledButton type="button" onClick={onClick} title="Dark Mode">
      <FaMoon />
    </StyledButton>
  );
}

DarkButton.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};

export default DarkButton;
