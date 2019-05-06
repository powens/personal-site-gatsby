import React from 'react';
import styled from '@emotion/styled';
import { FiMinus } from 'react-icons/fi';
import { Link } from 'gatsby';
import { PostProps } from '../utils/types';

const Card = styled.div`
  display: grid;
  margin-bottom: 2rem;
  grid-gap: 0.4rem;

  grid-template-columns: 0.2fr 1fr;
  grid-template-areas:
    'title title'
    'date ttr'
    'excerpt excerpt';

  border: 1px solid var(--highlight);
  padding: 1rem;
`;

const BlogTitle = styled.h3`
  grid-area: title;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.time`
  grid-area: date;
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
}: PostProps) => (
  <Card>
    <BlogTitle>
      <Link to={path}>{title}</Link>
    </BlogTitle>
    <PostDate>
      <time dateTime={computerDate}>
        <small>{date}</small>
      </time>
    </PostDate>
    <Ttr>
      <small>{timeToRead} mins to read</small>
    </Ttr>
    {/* eslint-disable-next-line react/no-danger */}
    <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Card>
);

export default BlogCard;
