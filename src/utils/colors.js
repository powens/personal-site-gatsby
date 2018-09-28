const defaultColors = {
  border: '#999',
  backgroundColor: '#e8e8e8',
  primary: '#1f56a7',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerColor: 'hsla(0,0%,0%,1)',
};

const darkColors = {
  background: '#2b2b2b',
  border: '#cccccc',
  primary: '#2378d7',
  bodyColor: '#eee',
  headerColor: '#efefef',
};

const colorSchemes = {
  default: defaultColors,
  dark: darkColors,
};

const SCHEME_KEY = 'colorScheme';

const getColorScheme = () => {
  if (typeof window !== 'undefined') {
    const storedScheme = localStorage.getItem(SCHEME_KEY);
    if (colorSchemes.hasOwnProperty(storedScheme)) {
      return colorSchemes[storedScheme];
    }
  }
  return colorSchemes.default;
};

const setColorScheme = name => {
  if (typeof window !== 'undefined') {
    if (!colorSchemes.hasOwnProperty(name)) {
      throw new Error(`Color scheme ${name} doesn't exist`);
    } else {
      localStorage.setItem(SCHEME_KEY, name);
    }
  }
};

export default getColorScheme;
export { defaultColors, darkColors, setColorScheme };
