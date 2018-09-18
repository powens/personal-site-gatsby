import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';
import mq from '../utils/responsive';
import ProfilePic from '../assets/profile-pic.jpg';

const PictureWrapper = styled.div`
  grid-area: pic;
  justify-self: center;

  ${mq.medium(css`
    justify-self: left;
  `)};
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
    <Link to="/">
      <Picture src={ProfilePic} alt="Patrick Owens" />
    </Link>
  </PictureWrapper>
);

ProfilePicture.propTypes = {};

export default ProfilePicture;
