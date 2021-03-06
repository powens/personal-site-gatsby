import merge from 'deepmerge';
import typography from './typography';
import colors from './colors';
import styles from './styles';
import prism from './prism';

export default merge(typography, {
  useColorSchemeMediaQuery: true,
  fonts: {
    heading: `Work Sans, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  colors,
  styles,
  prism,
});
