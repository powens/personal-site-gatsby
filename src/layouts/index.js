import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import HelmetWrapper from '../components/HelmetWrapper';
import Sidebar from '../components/Sidebar';
import mq from '../utils/responsive';

injectGlobal({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
  },
});

const LayoutGrid = styled.div(mq({
  display: 'grid',
  gridAutoRows: ['none', 'min-content'],
  gridTemplateColumns: ['1fr 3fr', 'none'],
  gridGap: '1rem',
  height: '100vh',
  paddingLeft: '1rem',
  paddingRight: '1rem',
}));

const Children = styled.div(mq({
  paddingTop: ['4rem', 0],
  paddingRight: ['1rem', 0],
}));


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
