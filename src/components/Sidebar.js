import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import profilePic from './profile-pic.jpg';
import colors from '../utils/colors';
import mq from '../utils/responsive';

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 6rem;
  vertical-align: middle;
  margin-bottom: 0;
`;


const Title = styled.h3`
  padding-top: 1rem;
  margin-bottom: 1.66rem;
  vertical-align: middle;
  display: block;
  margin-left: 0;
`;

const Blurb = styled.p`
  display: block;
`;

const SocialBlock = styled.div`
  display: block;
  margin-left: 0;
`;

const icon = css`
  width: 2rem;
  height: 2rem;
`;

const Sidebar = () => (
  <React.Fragment>
    <Link to="/">
      <ProfilePicture src={profilePic} alt="Picture of me" />
    </Link>
    <Title>
      <Link to="/">
          torokokill
      </Link>
    </Title>
    <Blurb>
        Full-stack engineer, infosec enthusiast, HAM radio operator, gamer.
    </Blurb>
    <SocialBlock>
      <a href="https://github.com/torokokill"><FaGithub className={icon} /></a>
      <a href="https://twitter.com/torokokill"><FaTwitter className={icon} /></a>
    </SocialBlock>

  </React.Fragment>
);
export default Sidebar;
