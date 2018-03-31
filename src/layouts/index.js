import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
`;


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  height: 100vh;
`;

const SidebarWrapper = styled.div`
  border-right: 1px solid #999;
`;

const Children = styled.div`
`;


class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <GridWrapper>
        <Helmet>
          <html lang="en" />
        </Helmet>

        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <Children>
          {children()}
        </Children>
      </GridWrapper>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
};

export default Template;
