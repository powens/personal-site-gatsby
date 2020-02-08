/** @jsx jsx **/
import { Styled, css, jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostProps } from '../utils/types';

const Card = styled.div`
  display: grid;
  margin-bottom: 2rem;
  grid-gap: 0.4rem;

  grid-template-columns: minmax(5rem, 1fr) auto;
  grid-template-areas: 'title date';
`;

const BlogCard = ({ slug, title, date, computerDate }: PostProps) => (
  <Card>
    <Styled.h3
      css={css({
        gridArea: 'title',
        marginBottom: '0.5rem',
      })}
    >
      <Styled.a as={Link} to={slug}>
        {title}
      </Styled.a>
    </Styled.h3>
    <time dateTime={computerDate} sx={{ gridArea: 'date', text: 'muted' }}>
      {date}
    </time>
  </Card>
);

export default BlogCard;
