import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { injectGlobal } from 'emotion';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import SocialBlock from './SocialBlock';
import Blurb from './Blurb';
import mq from '../utils/responsive';
import { defaultColors, darkColors, getColorSchemeName } from '../utils/colors';

require('prismjs/themes/prism-tomorrow.css');

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  :root {
    --background: ${defaultColors.background};
    --border: ${defaultColors.border};
    --bg: ${defaultColors.backgroundColor};
    --primary: ${defaultColors.primary};
    --bodyColor: ${defaultColors.bodyColor};
    --headerColor: ${defaultColors.headerColor};
  }
  
  .dark {
    --background: ${darkColors.background};
    --border: ${darkColors.border};
    --bg: ${darkColors.backgroundColor};
    --primary: ${darkColors.primary};
    --bodyColor: ${darkColors.bodyColor};
    --headerColor: ${darkColors.headerColor};
  }
  
  html {
    box-sizing: border-box;
  }
  
  body {
    transition: color 0.5s, border-color 0.5s, background-color 0.5s;
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

class Template extends React.Component {
  state = {
    currentColorScheme: getColorSchemeName(),
  };

  constructor(props) {
    super(props);
    this.onToggleColorScheme = this.onToggleColorScheme.bind(this);
  }

  componentDidMount() {
    // TODO: Need to figure out why the storage event listener isnt working
    // window.addEventListener('storage', updateColorScheme);
  }

  componentWillUnmount() {
    // window.removeEventListener('storage', updateColorScheme);
  }

  onToggleColorScheme() {
    this.setState({
      currentColorScheme: getColorSchemeName(),
    });
  }

  render() {
    const { children, isLandingPage } = this.props;
    const { currentColorScheme } = this.state;

    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');
      if (currentColorScheme === 'dark') {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
    }

    return (
      <SiteWrapper>
        <Header />
        <ProfilePicture />
        <SocialBlock onToggleColorScheme={this.onToggleColorScheme} />
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
