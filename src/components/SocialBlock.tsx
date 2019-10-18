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

// prettier-ignore
const socials = [
  { url: "https://github.com/powens", label: "Github", Icon: FaGithub },
  { url: "https://twitter.com/padraigcodes", label: "Twitter", Icon: FaTwitter },
  { url: "https://instagram.com/padraig.owens", label: "Instagram", Icon: FaInstagram },
  { url: "https://www.linkedin.com/in/pmowens/", label: "LinkedIn", Icon: FaLinkedin },
  { url: "/rss.xml", label: "RSS Feed", Icon: FaRss }
]

const SocialBlock = () => (
  <BlockWrapper>
    {socials.map(({ label, url, Icon }) => (
      <SocialLink key={label} href={url} aria-label={label}>
        <Icon />
      </SocialLink>
    ))}
  </BlockWrapper>
);

export default SocialBlock;
