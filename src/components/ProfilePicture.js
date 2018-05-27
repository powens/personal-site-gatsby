import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import profilePic from './profile-pic.jpg';
import mq from "../utils/responsive";

const PictureWrapper = styled.div`
  grid-area: pic;
  justify-self: center;
  
  ${mq.medium(css`
    justify-self: left;
  `)}
`;

const PictureLink = styled.css`
  display: inline-block;
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 100%;
  min-width: 100%;
  vertical-align: middle;
  margin-bottom: 0;
`;

const ProfilePicture = () => (
  <PictureWrapper>
    <Link to="/" className={PictureLink}>
      <Picture src={profilePic} alt="Picture of me" />
    </Link>
  </PictureWrapper>
);

export default ProfilePicture;
