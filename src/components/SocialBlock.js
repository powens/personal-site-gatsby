import React from 'react';
import styled, { css } from 'react-emotion';
import { FaGithub, FaTwitter, FaMastodon } from 'react-icons/fa';
import { toggleColorScheme } from '../utils/colors';
import mq from '../utils/responsive';
import DarkButton from './DarkButton';

const IconWrapper = styled.div`
  grid-area: social;
  justify-self: center;
  align-self: center;

  display: flex;

  ${mq.medium(css`
    justify-self: right;
  `)};
`;

const SocialLink = styled.a`
  // margin-left: 1rem;
  font-size: 1.5rem;
`;

const SocialBlock = () => (
  <IconWrapper>
    <SocialLink href="https://github.com/powens" aria-label="Link to Github">
      <FaGithub />
    </SocialLink>
    <SocialLink
      href="https://twitter.com/padraigcodes"
      aria-label="Link to Twitter"
    >
      <FaTwitter />
    </SocialLink>
    <SocialLink
      href="https://mastodon.technology/@powens"
      aria-label="Link to Mastodon"
    >
      <FaMastodon />
    </SocialLink>
    <DarkButton />
  </IconWrapper>
);

export default SocialBlock;
