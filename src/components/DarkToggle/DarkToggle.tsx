import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ClassNames } from '@emotion/core';
import { useColorMode } from 'theme-ui';
import Toggle from 'react-toggle';
import './DarkToggle.css';
import { darkColors } from '../../utils/colors';

function DarkToggle(): JSX.Element {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode == 'dark';
  const toggleColorMode = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <ClassNames>
      {({ css }) => (
        <Toggle
          checked={isDark}
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
          onChange={toggleColorMode}
          aria-label="Toggle dark mode"
        />
      )}
    </ClassNames>
  );
}

export default DarkToggle;
