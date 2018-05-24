import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const Card = styled.div`
  display: grid;
`;

const BlogCard = ({
  path, title, date, excerpt, titleImage,
}) => (
  <Card>
    <h3>
      <Link to={path}>
        {title}
      </Link>
    </h3>
    <Img resolutions={titleImage.resolutions} />
    <small>{date}</small>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Card>
);

BlogCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  titleImage: PropTypes.any.isRequired,
};

export default BlogCard;
