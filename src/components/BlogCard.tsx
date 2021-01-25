/** @jsx jsx **/
import { Styled, jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostProps } from '../utils/types';
import TagList from './tags/TagList';

const Card = styled.div`
  display: grid;
  margin-bottom: 2rem;
  grid-gap: 0.8rem;

  grid-template-columns: minmax(5rem, 1fr) auto;
  grid-template-areas:
    'title title'
    'tags date'
    'excerpt excerpt';
`;

const BlogCard = ({
  slug,
  title,
  date,
  computerDate,
  excerpt,
  tags,
}: PostProps): JSX.Element => (
  <Card>
    <Styled.h3
      sx={{
        gridArea: 'title',
        marginBottom: '0',
      }}
    >
      <Styled.a as={Link} to={slug}>
        {title}
      </Styled.a>
    </Styled.h3>
    <time dateTime={computerDate} sx={{ gridArea: 'date', color: 'muted' }}>
      {date}
    </time>
    <div sx={{ gridArea: 'tags' }}>
      <TagList tags={tags} />
    </div>
    <Styled.p
      sx={{
        gridArea: 'excerpt',
      }}
    >
      {excerpt}
    </Styled.p>
  </Card>
);

export default BlogCard;
