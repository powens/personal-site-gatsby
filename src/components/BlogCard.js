import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';

const BlogCard = ({
  path, title, date, excerpt,
}) => (
  <div>
    <h3>
      <Link to={path}>
        {title}
      </Link>
    </h3>
    <small>{date}</small>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </div>
);

BlogCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default BlogCard;
