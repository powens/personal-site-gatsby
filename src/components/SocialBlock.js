import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FaGithub, FaTwitter, FaMastodon } from 'react-icons/fa';
import mq from '../utils/responsive';
import DarkToggle from './DarkToggle';

const BlockWrapper = styled.div`
  grid-area: social;
  justify-self: center;
  align-self: center;
  align-items: center;

  display: flex;
  width: 8rem;
  justify-content: space-between;

  ${mq.medium(css`
    justify-self: right;
  `)};
`;

const SocialLink = styled.a`
  // margin-left: 1rem;
  font-size: 1.5rem;
`;

const SocialBlock = ({ onToggleColorScheme, colorScheme }) => (
  <BlockWrapper>
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
    <DarkToggle
      onToggleColorScheme={onToggleColorScheme}
      colorScheme={colorScheme}
    />
  </BlockWrapper>
);

SocialBlock.propTypes = {};

export default SocialBlock;
