import React from 'react';
import { Global, css } from '@emotion/core';
import { darkColors, defaultColors } from '../utils/colors';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --background: ${defaultColors.background};
          --border: ${defaultColors.border};
          --bg: ${defaultColors.backgroundColor};
          --primary: ${defaultColors.primary};
          --bodyColor: ${defaultColors.bodyColor};
          --headerColor: ${defaultColors.headerColor};
        }

        .dark {
          --background: ${darkColors.background};
          --border: ${darkColors.border};
          --bg: ${darkColors.backgroundColor};
          --primary: ${darkColors.primary};
          --bodyColor: ${darkColors.bodyColor};
          --headerColor: ${darkColors.headerColor};
        }

        html {
          box-sizing: border-box;
        }

        body {
          // transition: color 0.5s, border-color 0.5s, background-color 0.5s;
        }

        *,
        *:after,
        *:before {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
        }

        .gatsby-highlight {
          overflow: auto;
        }

        .gatsby-highlight pre[class*='language-'] {
          overflow: initial;
          float: left;
          min-width: 100%;
        }
      `}
    />
  );
}

export default GlobalStyles;
