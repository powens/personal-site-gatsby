import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { injectGlobal } from 'emotion';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import SocialBlock from './SocialBlock';
import Blurb from './Blurb';
import mq from '../utils/responsive';
import getColorScheme from '../utils/colors';

require('prismjs/themes/prism-tomorrow.css');

const colors = getColorScheme();

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  :root {
    --background: ${colors.background};
    --border: ${colors.border};
    --bg: ${colors.backgroundColor};
    --primary: ${colors.primary};
    --bodyColor: ${colors.bodyColor};
    --headerColor: ${colors.headerColor};
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
  
  .gatsby-highlight  {
    overflow: auto;
  }
  
  .gatsby-highlight pre[class*='language-'] {
    overflow: initial;
    float: left;
    min-width: 100%;
  }
`;

const SiteWrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;

  display: grid;
  grid-gap: 1rem;

  grid-template-areas:
    'title'
    'pic'
    'social'
    'blurb'
    'content';

  min-width: 0;

  ${mq.medium(css`
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'pic title social'
      'blurb blurb blurb'
      'content content content';
  `)};
`;

const Content = styled.div`
  grid-area: content;
  min-width: 0;
  overflow: hidden;
`;

function updateColorScheme() {
  const colors = getColorScheme();
  if (document) {
    document.documentElement.style.setProperty(
      '--background',
      colors.background
    );
    document.documentElement.style.setProperty('--border', colors.border);
    document.documentElement.style.setProperty('--bg', colors.backgroundColor);
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--bodyColor', colors.bodyColor);
    document.documentElement.style.setProperty(
      '--headerColor',
      colors.headerColor
    );
  }
  // injectGlobal`
  //   :root {
  //     --background: ${colors.background};
  //     --border: ${colors.border};
  //     --bg: ${colors.backgroundColor};
  //     --primary: ${colors.primary};
  //     --bodyColor: ${colors.bodyColor};
  //     --headerColor: ${colors.headerColor};
  //   }`;
}

function onToggleTheme() {
  updateColorScheme();
}

class Template extends React.Component {
  componentDidMount() {
    updateColorScheme();
    // window.addEventListener('storage', updateColorScheme);
  }

  componentWillUnmount() {
    // window.removeEventListener('storage', updateColorScheme);
  }

  render() {
    const { children, isLandingPage } = this.props;
    // useEffect(() => {
    //   if (window) {
    //     console.log('adf');

    //   }
    // });

    return (
      <SiteWrapper>
        <Header />
        <ProfilePicture />
        <SocialBlock onToggleTheme={onToggleTheme} />
        {isLandingPage && <Blurb />}
        <Content>{children}</Content>
      </SiteWrapper>
    );
  }
}

Template.propTypes = {
  children: PropTypes.node,
  isLandingPage: PropTypes.bool,
};

Template.defaultProps = {
  isLandingPage: false,
  children: null,
};

export default Template;
