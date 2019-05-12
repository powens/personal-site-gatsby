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
  grid-template-areas:
    'title title'
    'date ttr'
    'excerpt excerpt';
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

const Excerpt = styled.summary`
  grid-area: excerpt;
`;

const BlogCard = ({
  path,
  title,
  date,
  computerDate,
  excerpt,
  timeToRead,
  icon,
}: PostProps) => (
  <Card>
    <BlogTitle>
      <Link to={path}>
        {/* <PostIcon icon={icon} /> */}
        {title}
      </Link>
    </BlogTitle>
    <PostDate>
      <time dateTime={computerDate}>{date}</time>
    </PostDate>
    <Ttr>
      <EmphasisDescription number={timeToRead} description="mins to read" />
    </Ttr>
    {/* eslint-disable-next-line react/no-danger */}
    <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Card>
);

export default BlogCard;
