import React from 'react';
import { Global, css } from '@emotion/core';
import { darkColors, defaultColors } from '../utils/colors';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          --background: ${defaultColors.background};
          --border: ${defaultColors.border};
          --primary: ${defaultColors.primary};
          --bodyColor: ${defaultColors.bodyColor};
          --headerColor: ${defaultColors.headerColor};
          --highlight: ${defaultColors.highlight};

          background-color: var(--background);
        }

        body.dark {
          --background: ${darkColors.background};
          --border: ${darkColors.border};
          --primary: ${darkColors.primary};
          --bodyColor: ${darkColors.bodyColor};
          --headerColor: ${darkColors.headerColor};
          --highlight: ${darkColors.highlight};
        }

        html {
          box-sizing: border-box;
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
