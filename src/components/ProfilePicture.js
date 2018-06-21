import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { StaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import mq from '../utils/responsive';

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

const Picture = styled.css`
  border-radius: 50%;
  width: 100%;
  min-width: 100%;
  vertical-align: middle;
  margin-bottom: 0;
`;

const ProfilePicture = () => (
  <StaticQuery
    query={graphql`
      query ProfilePicQuery {
        profilePicture:file(relativePath: { eq: "profile-pic.jpg" }) {
          childImageSharp {
            resolutions(width: 139, quality: 100) {
              ...GatsbyImageSharpResolutions_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <PictureWrapper>
        <Link to="/" className={PictureLink}>
          <Img resolutions={data.profilePicture.childImageSharp.resolutions} className={Picture} style={{ borderRadius: '50%' }} alt="Picture of me" />
        </Link>
      </PictureWrapper>
    )}
  />
);

ProfilePicture.propTypes = {
};

export default ProfilePicture;
