import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import profilePic from './profile-pic.jpg';
import colors from '../utils/colors';
import mq from '../utils/responsive';

const PictureWrapper = styled.div`
  grid-area: picture;
  justify-self: center;
`;

const PictureLink = styled.css`
  display: inline-block;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100%;
  min-width: 100%;
  vertical-align: middle;
  margin-bottom: 0;
`;

const Title = styled.h3`
  grid-area: title;
  justify-self: center;
  align-self: center;
  margin-bottom: 0;
`;

const Blurb = styled.div`
  display: none;
  grid-area: blurb;
  justify-self: center;
  
  ${mq.medium(css`
    display: block;
  `)}
`;

const SocialBlock = styled.div`
  grid-area: social;
  justify-self: center;
  align-self: center;
`;

const icon = css`
  width: 2rem;
  height: 2rem;
`;

const Sidebar = () => (
  <React.Fragment>
    <PictureWrapper>
      <Link to="/" className={PictureLink}>
        <ProfilePicture src={profilePic} alt="Picture of me" />
      </Link>
    </PictureWrapper>
    <Title>
      <Link to="/">
          Patrick Owens
      </Link>
    </Title>
    <Blurb>
        Full-stack engineer, infosec enthusiast, HAM radio operator, gamer.
    </Blurb>
    <SocialBlock>
      <a href="https://github.com/powens"><FaGithub className={icon} /></a>
      <a href="https://twitter.com/torokokill"><FaTwitter className={icon} /></a>
    </SocialBlock>

  </React.Fragment>
);
export default Sidebar;
