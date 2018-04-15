import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import profilePic from './profile-pic.jpg';
import colors from '../utils/colors';
import mq from '../utils/responsive';

const ProfilePicture = styled.img(mq({
  borderRadius: '50%',
  width: ['6rem', '4rem'],
  verticalAlign: 'middle',
  marginBottom: 0,
}));


const Wrapper = styled.div(mq({
  textAlign: 'center',
  borderRight: [`1px solid ${colors.border}`, 'none'],
  paddingTop: ['4rem', '1rem'],
  paddingLeft: 0,
  paddingRight: 0,
}));

const Title = styled.h3(mq({
  paddingTop: ['1rem', 0],
  marginBottom: ['1.66rem', 0],
  verticalAlign: 'middle',
  display: ['block', 'inline-block'],
  marginLeft: [0, '2rem'],
}));

const Blurb = styled.p(mq({
  display: ['block', 'none'],
}));

const SocialBlock = styled.div(mq({
  display: ['block', 'inline-block'],
  marginLeft: [0, '2rem'],
}));

const icon = css`
  width: 2em;
  height: 2em;
`;

const Sidebar = ({ location }) =>
  // if (location.pathname === '/')
  (
    <Wrapper>
      <Link to="/">
        <ProfilePicture src={profilePic} alt="torokokill" />
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

    </Wrapper>
  );
export default Sidebar;
