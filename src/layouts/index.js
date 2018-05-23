import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import { injectGlobal } from 'emotion';
import HelmetWrapper from '../components/HelmetWrapper';
import Header from '../components/Header';
import ProfilePicture from '../components/ProfilePicture';
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
`;

const TitleWrapper = styled.div`


  // ${mq.medium(css`
  //   grid-template-columns: 1fr 3fr;
  //   grid-template-rows: auto auto auto auto 1fr;
  //   grid-template-areas:
  //     "picture content"
  //     "title   content"
  //     "blurb   content"
  //     "social  content"
  //     ".       content";
  // `)}
`;

const Children = styled.div`
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

    return (
      <SiteWrapper>
        <Header />
        <ProfilePicture />
        {children()}
      </SiteWrapper>
    );
  }
}


export default Template;
