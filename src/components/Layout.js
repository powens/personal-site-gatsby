import React from 'react';
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

const Template = ({ children, isLandingPage }) => (
  <SiteWrapper>
    <Header />
    <ProfilePicture />
    <SocialBlock />
    {isLandingPage && <Blurb />}
    <Content>{children}</Content>
  </SiteWrapper>
);

Template.propTypes = {
  children: PropTypes.node,
  isLandingPage: PropTypes.bool,
};

Template.defaultProps = {
  isLandingPage: false,
  children: null,
};

export default Template;
