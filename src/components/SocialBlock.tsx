import React from 'react';
import styled from '@emotion/styled';
import { Themed, css } from 'theme-ui';
import {
  FiGithub as GithubIcon,
  FiTwitter as TwitterIcon,
  FiInstagram as InstagramIcon,
  FiLinkedin as LinkedinIcon,
  FiRss as RssIcon,
} from 'react-icons/fi';

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
  { url: "https://github.com/powens", label: "Github", Icon: GithubIcon },
  { url: "https://twitter.com/padraigcodes", label: "Twitter", Icon: TwitterIcon },
  { url: "https://instagram.com/padraig.owens", label: "Instagram", Icon: InstagramIcon },
  { url: "https://www.linkedin.com/in/pmowens/", label: "LinkedIn", Icon: LinkedinIcon },
  { url: "/rss.xml", label: "RSS Feed", Icon: RssIcon }
]

const SocialBlock = (): JSX.Element => (
  <BlockWrapper>
    {socials.map(({ label, url, Icon }) => (
      <Themed.a
        css={css({ fontSize: '2rem', marginLeft: '1rem' })}
        key={label}
        href={url}
        aria-label={label}
      >
        <Icon />
      </Themed.a>
    ))}
  </BlockWrapper>
);

export default SocialBlock;
