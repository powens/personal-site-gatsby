import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import profilePic from './profile-pic.jpg';

const ProfilePicture = styled.img`
  border-radius: 50%; 
`;

const Wrapper = styled.div`
  text-align: center;
`;

const icon = css`
  width: 2em;
  height: 2em;
`;

const Sidebar = ({ location }) => {
  // if (location.pathname === '/')
  return (
    <Wrapper>
      <Link to="/">
        <ProfilePicture src={profilePic} alt="torokokill" />
      </Link>
      <h3>
        <Link to="/">
          torokokill
        </Link>
      </h3>
      <p>
        Full-stack engineer, infosec enthusiast, HAM radio operator, gamer.
      </p>
      <p>
        <a href="https://github.com/torokokill"><FaGithub className={icon} /></a>
        <a href="https://twitter.com/torokokill"><FaTwitter className={icon} /></a>
      </p>

    </Wrapper>
  );
};

export default Sidebar;
