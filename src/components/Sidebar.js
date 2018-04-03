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
      <h3>
        <Link to="/">
          torokokill
        </Link>
      </h3>
      <ProfilePicture src={profilePic} alt="torokokill" />
      <p>
        Full-stack developer, infosec enthusiast, HAM radio operator.
      </p>
      <p>
        <FaGithub className={icon} />
        <FaTwitter className={icon} />
      </p>

    </Wrapper>
  );
};

export default Sidebar;
