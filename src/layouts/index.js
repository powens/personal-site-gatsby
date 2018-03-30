import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import Sidebar from '../components/Sidebar';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

const SidebarWrapper = styled.div`

`;

const Children = styled.div`
`;


class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <GridWrapper>
        <SidebarWrapper>
          <Sidebar/>
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
