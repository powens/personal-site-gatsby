import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Bio from './Bio';

const Sidebar = ({ location }) => {
  // if (location.pathname === '/')
  return (
    <div>
      <h3>
        <Link to="/">
          torokokill
        </Link>
      </h3>

      <Bio />
    </div>
  );
};

export default Sidebar;
