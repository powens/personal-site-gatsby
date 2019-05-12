import React from 'react';
import { Global, css } from '@emotion/core';
import { darkColors, defaultColors } from '../utils/colors';

function generateColors(palette: any) {
  return Object.entries(palette)
    .map(([key, value]) => {
      return `--${key}: ${value};`;
    })
    .join('\n');
}

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          ${generateColors(defaultColors)}

          background-color: var(--background);
        }

        body.dark {
          ${generateColors(darkColors)}
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
