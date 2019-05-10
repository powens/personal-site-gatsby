import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaTwitter, FaMastodon, FaInstagram } from 'react-icons/fa';
import mq from '../utils/responsive';

const BlockWrapper = styled.span`
  grid-area: social;
  justify-self: center;
  align-self: center;
  align-items: center;

  display: flex;
  width: 8rem;
  justify-content: space-between;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
`;

const SocialBlock = () => (
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
    <SocialLink
      href="https://instagram.com/padraig"
      aria-label="Link to Instagram"
    >
      <FaInstagram />
    </SocialLink>
  </BlockWrapper>
);

export default SocialBlock;
