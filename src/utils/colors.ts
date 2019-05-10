const primary = [
  'hsl(216, 69%, 90%)',
  'hsl(216, 69%, 59%)',
  'hsl(216, 69%, 49%)',
  'hsl(216, 69%, 39%)',
  'hsl(216, 69%, 29%)',
];

const grey = [
  'rgb(238, 238, 238)',
  'rgb(218, 218, 218)',
  'rgb(198, 198, 198)',
  'rgb(179, 179, 179)',
  'rgb(159, 159, 159)',
  'rgb(119, 119, 119)',
  'rgb(99, 99, 99)',
  'rgb(60, 60, 60)',
];

const defaultBodyColor = 'hlsa(207, 66%, 20%, 0.8)';

const defaultColors = {
  background: '#fff',
  border: grey[5],
  primary: primary[2],
  bodyColor: defaultBodyColor,
  secondaryBodyColor: defaultBodyColor,
  headerColor: 'hlsa(207, 66%, 20%, 0.8)',
  tagBg: primary[3],
  tagBgHover: primary[2],
  tagFg: primary[0],
  footerBg: grey[4],
};

const darkColors = {
  background: '#2b2b2b',
  border: grey[2],
  primary: primary[1],
  bodyColor: grey[0],
  secondaryBodyColor: grey[4],
  headerColor: grey[0],
  tagBg: primary[3],
};

export { defaultColors, darkColors };
