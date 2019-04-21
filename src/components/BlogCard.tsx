import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Card = styled.div`
  display: grid;
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h3`
  margin-bottom: 0;
`;

interface Props {
  path: string;
  title: string;
  date: string;
  excerpt: string;
}

const BlogCard = ({ path, title, date, excerpt }: Props) => (
  <Card>
    <BlogTitle>
      <Link to={path}>{title}</Link>
    </BlogTitle>
    <small>{date}</small>
    {/* eslint-disable-next-line react/no-danger */}
    <span dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Card>
);

BlogCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default BlogCard;
