import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ClassNames } from '@emotion/core';
// @ts-ignore
import ThemeToggler from '../ThemeToggler';
// @ts-ignore
import Toggle from 'react-toggle';
import './DarkToggle.css';
import { darkColors } from '../../utils/colors';

interface ThemeTogglerProps {
  theme: string;
  toggleTheme(themeName: string): null;
}

function DarkToggle(): JSX.Element {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: ThemeTogglerProps) => (
        <ClassNames>
          {({ css }) => (
            <Toggle
              checked={theme === 'dark'}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                toggleTheme(e.target.checked ? 'dark' : 'light')
              }
            />
          )}
        </ClassNames>
      )}
    </ThemeToggler>
  );
}

export default DarkToggle;
