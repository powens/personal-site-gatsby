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

const icon = css`
  font-size: 1.75rem;
  margin-left: 0.2rem;
`;

const SocialBlock = () => (
  <IconWrapper>
    <a href="https://github.com/powens" aria-label="Link to Github"><FontAwesomeIcon className={icon} icon={faGithub} /></a>
    <a href="https://twitter.com/torokokill" aria-label="Link to Twitter"><FontAwesomeIcon className={icon} icon={faTwitter} /></a>
    <a href="https://mastodon.social/powens" aria-label="Link to Mastodon"><FontAwesomeIcon className={icon} icon={faMastodon} /></a>
  </IconWrapper>
);

export default SocialBlock;
