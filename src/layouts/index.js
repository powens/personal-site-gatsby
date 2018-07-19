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


require('prismjs/themes/prism-tomorrow.css');

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
  
  max-width: 100vw;
  
  grid-template-areas:
    "title"
    "pic"
    "social"
    "blurb"
    "content";
   grid-template-rows: repeat(5, 1fr);
   grid-template-columns: minmax(200px, 1fr);
  
  ${mq.medium(css`
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
      "pic title social"
      "blurb blurb blurb"
      "content content content";
  `)}
`;

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 2rem;
`;


class Template extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.func,
      location: PropTypes.object,
      route: PropTypes.object,
      data: PropTypes.shape({
        profilePicture: PropTypes.object,
      }),
    };
  }

  render() {
    const {
      location: {
        pathname = null,
      } = {},
      children,
      data: {
        profilePicture: {
          childImageSharp,
        },
      },
    } = this.props;

    const isLandingPage = (pathname === '/');

    return (
      <SiteWrapper>
        <Header />
        <ProfilePicture pic={childImageSharp} />
        <SocialBlock />
        {isLandingPage && <Blurb />}
        <Content>
          {children()}
        </Content>
      </SiteWrapper>
    );
  }
}


export default Template;


export const query = graphql`
  query ProfilePicQuery {
    profilePicture:file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        resolutions(width: 139, quality: 100) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
  }
`;
