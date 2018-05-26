import Typography from 'typography';
// import theme from 'typography-theme-judah';

import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import colors from './colors';

const theme = {
  title: 'Boop',
  baseFontSize: '16px',
  baseLineHeight: 5 / 3,
  googleFonts: [
    {
      name: 'Roboto Condensed',
      styles: ['400', '400i'],
    },
  ],
  headerFontFamily: ['Roboto Condensed', 'sans-serif'],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 2,
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 500,
  bodyWeight: 'normal',
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: colors.primary,
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      color: options.bodyColor,
      textDecoration: 'none',
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(0),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray(80)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h5,h6': {
      textTransform: 'uppercase',
      fontStyle: 'italic',
    },
  }),
};


const typography = new Typography(theme);

export default typography;
