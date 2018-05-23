import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import { injectGlobal } from 'emotion';
import HelmetWrapper from '../components/HelmetWrapper';
import profilePic from '../components/profile-pic.jpg';

const TopBar = styled.div`
  position: sticky;
`;

const MainLayoutWrapper = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1rem 0 1rem;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 5rem;
  min-width: 5rem;
  vertical-align: middle;
  margin-bottom: 0;
`;

class Blog extends React.Component {
  render() {
    return (
      <MainLayoutWrapper>
        <TopBar>
          <h3>Patrick Owens</h3>
          <ProfilePicture src={profilePic} alt="Picture of me" />
        </TopBar>
      </MainLayoutWrapper>
    );
  }
}


export default New;
