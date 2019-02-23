import React from 'react';
import PropTypes from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ClassNames } from '@emotion/core';
import Toggle from 'react-toggle';
import './DarkToggle.css';
import { darkColors } from '../utils/colors';

function DarkToggle({ onToggleColorScheme, colorScheme }) {
  return (
    <ClassNames>
      {({ css }) => (
        <Toggle
          checked={colorScheme === 'dark'}
          className={css`
            margin-top: auto;
            margin-bottom: auto;

            & svg {
              color: ${darkColors.bodyColor};
              width: 10px;
              height: 10px;
            }
          `}
          icons={{
            checked: <FaMoon />,
            unchecked: <FaSun />,
          }}
          onChange={onToggleColorScheme}
        />
      )}
    </ClassNames>
  );
}

DarkToggle.propTypes = {
  onToggleColorScheme: PropTypes.func.isRequired,
  colorScheme: PropTypes.string.isRequired,
};

export default DarkToggle;
