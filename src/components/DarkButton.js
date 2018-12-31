import React from 'react';
import PropTypes from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from '@emotion/styled';
import { toggleColorScheme, getColorSchemeName } from '../utils/colors';

const StyledButton = styled.button`
  font-size: 1.5rem;
  background: none;
  color: var(--primary);
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;

  &:hover {
    color: var(--bodyColor);
  }
`;

function DarkButton({ onToggleColorScheme }) {
  const onClick = () => {
    toggleColorScheme();
    onToggleColorScheme();
  };

  const schemeName = getColorSchemeName();

  const Icon = schemeName === 'dark' ? FaSun : FaMoon;

  return (
    <StyledButton type="button" onClick={onClick} title="Dark Mode">
      <Icon />
    </StyledButton>
  );
}

DarkButton.propTypes = {
  onToggleColorScheme: PropTypes.func.isRequired,
};

export default DarkButton;
