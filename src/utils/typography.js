import Typography from 'typography';

import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const nativeStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif',
];

const theme = {
  title: 'Boop',
  baseFontSize: '16px',
  baseLineHeight: 5 / 3,
  headerFontFamily: nativeStack,
  bodyFontFamily: nativeStack,
  scaleRatio: 2,
  headerColor: 'var(--headerColor)',
  bodyColor: 'var(--bodyColor)',
  headerWeight: 500,
  bodyWeight: 'normal',
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      backgroundColor: 'var(--background)',
    },
    a: {
      color: 'var(--primary)',
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

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
