import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import { injectGlobal } from 'emotion';
import HelmetWrapper from '../components/HelmetWrapper';
import Header from '../components/Header';
import ProfilePicture from '../components/ProfilePicture';
import SocialBlock from '../components/SocialBlock';
import Blurb from '../components/Blurb';
import mq from '../utils/responsive';


require('prismjs/themes/prism-solarizedlight.css');

injectGlobal`
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
`;

const SiteWrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  
  display: grid;
  grid-gap: 1rem;
  
  ${mq.medium(css`
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    // grid-template: 
    //   "pic header
  `)}
`;


class Template extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.func,
      location: PropTypes.object,
      route: PropTypes.object,
    };
  }

  render() {
    const {
      location: {
        pathname = null,
      } = {},
      children,
    } = this.props;

    const isLandingPage = (pathname === '/');

    return (
      <SiteWrapper>
        <Header />
        <ProfilePicture />
        <SocialBlock />
        {isLandingPage && <Blurb />}
        {children()}
      </SiteWrapper>
    );
  }
}


export default Template;
