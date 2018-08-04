import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { StaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import mq from '../utils/responsive';
import ProfilePic from './profile-pic.jpg';

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
      <Picture src={ProfilePic} />
    </Link>
  </PictureWrapper>
);

ProfilePicture.propTypes = {
};

export default ProfilePicture;
