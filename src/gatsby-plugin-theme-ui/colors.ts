const primary01 = 'hsl(216, 69%, 90%)';
const primary0 = 'hsl(216, 69%, 90%)';
const primary1 = 'hsl(216, 69%, 75%)';
const primary2 = 'hsl(216, 69%, 65%)';
const primary3 = 'hsl(216, 69%, 59%)';
const primary4 = 'hsl(216, 69%, 49%)';
const primary5 = 'hsl(216, 69%, 39%)';
const primary6 = 'hsl(216, 69%, 29%)';
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`;

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

export default {
  background: '#fff',
  text: 'hlsa(207, 66%, 20%, 0.8)',
  heading: 'hlsa(207, 66%, 20%, 0.8)',
  primary: primary4,
  secondary: 'rgba(60, 60, 60, 0.8)',
  muted: 'rgb(159, 159, 159)',
  highlight: opaqueLightYellow,

  tagBg: primary5,
  tagBgHover: primary4,
  tagFg: primary0,

  // Prism definitions
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },

  modes: {
    dark: {
      background: '#2b2b2b',
      text: 'rgb(238, 238, 238)',
      heading: 'rgb(238, 238, 238)',
      primary: primary3,
      secondary: 'rgb(159, 159, 159)',
      muted: 'rgb(198, 198, 198)',
      highlight: primary4,

      tagBg: primary5,
      tagBgHover: primary4,
      tagFg: primary0,
    },
  },
};
