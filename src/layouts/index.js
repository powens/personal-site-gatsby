import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import { injectGlobal } from 'emotion';
import HelmetWrapper from '../components/HelmetWrapper';
import Sidebar from '../components/Sidebar';
import mq from '../utils/responsive';
import New from './New';

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

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 3rem auto 4rem;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "picture title social"
    "content content content";
  grid-gap: 1rem;
  height: 100vh;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;

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
  grid-area: content;
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
    const { location, children } = this.props;
    return (
      <LayoutGrid>
        <Sidebar />
        <Children>
          {children()}
        </Children>
      </LayoutGrid>
    );
  }
}



export default Template;
