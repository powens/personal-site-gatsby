import React from 'react';
import styled, { css } from 'react-emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faMastodon from '@fortawesome/fontawesome-free-brands/faMastodon';

import mq from '../utils/responsive';

const IconWrapper = styled.div`
  grid-area: social;
  justify-self: center;
  align-self: center;
  
  ${mq.medium(css`
    justify-self: right;
  `)}
`;

const SocialLink = styled.a`
  margin-left: 0.2rem;
`;

// Hack overwriting the Font-awesome styles to prevent pop-in
const PreloadedImage = css`
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -.125em;
  width: 0.875em;
  overflow: visible;
  font-size: 1.75rem;
`;

const SocialBlock = () => (
  <IconWrapper>
    <SocialLink href="https://github.com/powens" aria-label="Link to Github">
      <FontAwesomeIcon icon={faGithub} className={PreloadedImage} />
    </SocialLink>
    <SocialLink href="https://twitter.com/torokokill" aria-label="Link to Twitter">
      <FontAwesomeIcon icon={faTwitter} className={PreloadedImage} />
    </SocialLink>
    <SocialLink href="https://mastodon.social/powens" aria-label="Link to Mastodon">
      <FontAwesomeIcon icon={faMastodon} className={PreloadedImage} />
    </SocialLink>
  </IconWrapper>
);

export default SocialBlock;
