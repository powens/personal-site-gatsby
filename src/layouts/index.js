import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import colors from '../utils/colors';

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
  
  // width: 900px;
  // margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SidebarWrapper = styled.div`
  border-right: 1px solid ${colors.border};
  padding-top: 4rem;
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


export default Template;
