import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Card = styled.div`
  display: grid;
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h3`
  margin-bottom: 0;
`;

const BlogCard = ({
  path, title, date, excerpt, titleImage,
}) => (
  <Card>
    <BlogTitle>
      <Link to={path}>
        {title}
      </Link>
    </BlogTitle>
    <small>{date}</small>
    <span dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Card>
);

BlogCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  titleImage: PropTypes.shape({
    resolutions: PropTypes.object,
    sizes: PropTypes.object,
  }).isRequired,
};

export default BlogCard;
