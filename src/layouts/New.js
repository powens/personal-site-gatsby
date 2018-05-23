import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import { injectGlobal } from 'emotion';
import HelmetWrapper from '../components/HelmetWrapper';

const TopBar = styled.div`
  display: sticky;
`;

const MainLayoutWrapper = styled.div`
  width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

class New extends React.Component {
  render() {
    return (
      <MainLayoutWrapper>
        <TopBar>
          <h3>Patrick Owens</h3>
        </TopBar>
      </MainLayoutWrapper>
    );
  }
}


export default New;
