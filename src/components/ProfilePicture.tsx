import React from 'react';
import styled from '@emotion/styled';
import mq from '../utils/responsive';
import ProfilePic from '../assets/profile-pic.jpg';

const PictureWrapper = styled.div`
  grid-area: pic;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 10rem;
  vertical-align: middle;
  justify-content: center;
  margin-bottom: 0;
  transition: width 0.2s ease-in;
`;

const ProfilePicture = () => (
  <PictureWrapper>
    <Picture src={ProfilePic} alt="Patrick Owens" />
  </PictureWrapper>
);

export default ProfilePicture;
