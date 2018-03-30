import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Sidebar = ({ location }) => {
  // if (location.pathname === '/')
  return (
    <h3>
      <Link to="/">
        Patricks Blog
      </Link>
    </h3>
  );
};

export default Sidebar;
