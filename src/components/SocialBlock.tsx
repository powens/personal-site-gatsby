import React from 'react';
import styled from '@emotion/styled';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaRss,
} from 'react-icons/fa';

const BlockWrapper = styled.div`
  grid-area: social;
  justify-self: center;
  align-self: center;
  align-items: center;

  display: flex;
  width: 10rem;
  justify-content: space-around;
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
      href="https://instagram.com/padraig.owens"
      aria-label="Link to Instagram"
    >
      <FaInstagram />
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/pmowens/"
      aria-label="Link to LinkedIn"
    >
      <FaLinkedin />
    </SocialLink>
    <SocialLink href="/rss.xml" aira-label="RSS Feed">
      <FaRss />
    </SocialLink>
  </BlockWrapper>
);

export default SocialBlock;
