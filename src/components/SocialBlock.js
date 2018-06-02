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
  font-size: 1.75rem;
  margin-left: 0.2rem;
`;

const SocialBlock = () => (
  <IconWrapper>
    <SocialLink href="https://github.com/powens" aria-label="Link to Github"><FontAwesomeIcon icon={faGithub} /></SocialLink>
    <SocialLink href="https://twitter.com/torokokill" aria-label="Link to Twitter"><FontAwesomeIcon icon={faTwitter} /></SocialLink>
    <SocialLink href="https://mastodon.social/powens" aria-label="Link to Mastodon"><FontAwesomeIcon icon={faMastodon} /></SocialLink>
  </IconWrapper>
);

export default SocialBlock;
