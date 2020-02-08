import React from 'react';
import styled from '@emotion/styled';
import { Styled, css } from 'theme-ui';
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
      <Styled.a
        css={css({ fontSize: '1.5rem', marginLeft: '1rem' })}
        key={label}
        href={url}
        aria-label={label}
      >
        <Icon />
      </Styled.a>
    ))}
  </BlockWrapper>
);

export default SocialBlock;
