import Typography, { TypographyOptions, VerticalRhythm } from 'typography';
// @ts-ignore
import gray from 'gray-percentage';
// @ts-ignore
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

const headerFont = 'Rubik';
const bodyFont = 'Open Sans';

const theme = {
  title: 'Boop',
  baseFontSize: '16px',
  baseLineHeight: 5 / 2.5,
  googleFonts: [
    {
      name: headerFont,
      styles: ['400'],
    },
    {
      name: bodyFont,
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: [headerFont, 'sans-serif'],
  bodyFontFamily: [bodyFont, 'sans-serif'],
  scaleRatio: 2,
  headerColor: 'var(--headerColor)',
  bodyColor: 'var(--bodyColor)',
  headerWeight: 500,
  bodyWeight: 'normal',
  boldWeight: 600,
  overrideStyles: (
    { adjustFontSizeTo, scale, rhythm }: VerticalRhythm,
    options: TypographyOptions
  ) => ({
    body: {
      backgroundColor: 'var(--background)',
      fontDisplay: 'fallback',
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
      color: 'var(--secondaryBodyColor)',
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid var(--primary)`,
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