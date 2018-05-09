import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import HelmetWrapper from '../components/HelmetWrapper';
import Sidebar from '../components/Sidebar';
import mq from '../utils/responsive';

require('prismjs/themes/prism-solarizedlight.css');

injectGlobal({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
  },
});

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 2rem 1rem 1rem 1fr;
  grid-template-areas:
    "picture content"
    "name    content"
    "blurb   content"
    "social  content";
  grid-gap: 1rem;
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Children = styled.div`
  padding-top: 4rem;
  padding-right: 1rem;
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
        <HelmetWrapper />

        <Sidebar />

        <Children>
          {children()}
        </Children>
      </LayoutGrid>
    );
  }
}


export default Template;
