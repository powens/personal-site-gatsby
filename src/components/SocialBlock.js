import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { FaGithub, FaTwitter, FaMastodon } from 'react-icons/fa';
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

const SocialBlock = ({ onToggleColorScheme }) => (
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
    <DarkButton onToggleColorScheme={onToggleColorScheme} />
  </IconWrapper>
);

SocialBlock.propTypes = {
  onToggleColorScheme: PropTypes.func.isRequired,
};

export default SocialBlock;
