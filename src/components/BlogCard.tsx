import React from 'react';
import styled from '@emotion/styled';
import PostIcon from './PostIcon';
import { Link } from 'gatsby';
import { PostProps } from '../utils/types';
import EmphasisDescription from './EmphasisDescription';

const Card = styled.div`
  display: grid;
  margin-bottom: 2rem;
  grid-gap: 0.4rem;

  grid-template-columns: minmax(5rem, 1fr) auto;
  grid-template-areas: 'title date';
`;

const BlogTitle = styled.h3`
  grid-area: title;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.time`
  grid-area: date;
  color: var(--secondaryBodyColor);
`;

const Ttr = styled.span`
  grid-area: ttr;
`;

const BlogCard = ({
  path,
  title,
  date,
  computerDate,
  excerpt,
  timeToRead,
}: PostProps) => (
  <Card>
    <BlogTitle>
      <Link to={path}>{title}</Link>
    </BlogTitle>
    <PostDate dateTime={computerDate}>{date}</PostDate>
    {/* <Ttr>
      <EmphasisDescription number={timeToRead} description="mins to read" />
    </Ttr> */}
  </Card>
);

export default BlogCard;
