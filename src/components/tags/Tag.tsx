/** @jsx jsx */
import { Link } from 'gatsby';
import { Styled, jsx } from 'theme-ui';

export interface Props {
  tag: string;
}

export default function Tag({ tag }: Props) {
  return (
    <Styled.a
      to={`/tags/${tag}/`}
      as={Link}
      sx={{
        bg: 'tagBg',
        color: 'tagFg',
        borderRadius: '0.3rem',
        padding: '0.4rem',

        transition: 'background 0.1s ease-in',

        '&:hover': {
          bg: 'tagBgHover',
        },
      }}
    >
      {tag}
    </Styled.a>
  );
}
