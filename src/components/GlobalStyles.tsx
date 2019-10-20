import React from 'react';
import { Global, css } from '@emotion/core';
import { darkColors, defaultColors, PaletteType } from '../utils/colors';

function generateColors(palette: PaletteType) {
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
          background-color: var(--background);
        }
        body.light {
          ${generateColors(defaultColors)}
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

        // Lines in code
        .gatsby-highlight pre[class*='language-'].line-numbers {
          padding-left: 2.8em;
        }

        .gatsby-highlight {
          border-radius: 0.3em;
          margin: 0.5em 0;
          padding: 1em;
          overflow: auto;
        }

        .gatsby-highlight pre[class*='language-'].line-numbers {
          padding: 0;
          padding-left: 2.8em;
          overflow: initial;
        }
      `}
    />
  );
}

export default GlobalStyles;
