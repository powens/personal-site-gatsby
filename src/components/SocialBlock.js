import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';

const SocialBlock = () => (
  <div>
    <a href="https://github.com/powens"><FaGithub className={icon} /></a>
    <a href="https://twitter.com/torokokill"><FaTwitter className={icon} /></a>
  </div>
);

export default SocialBlock;
