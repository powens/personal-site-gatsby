import React from 'react';
import styled, { css } from 'react-emotion';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';

const IconWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;

const icon = css`
  font-size: 2rem;
`;

const SocialBlock = () => (
  <IconWrapper>
    <a href="https://github.com/powens"><FaGithub className={icon} /></a>
    <a href="https://twitter.com/torokokill"><FaTwitter className={icon} /></a>
  </IconWrapper>
);

export default SocialBlock;
