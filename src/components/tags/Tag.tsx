/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

export interface Props {
  tag: string;
}

export default function Tag({ tag }: Props): JSX.Element {
  return (
    <Link
      to={`/tags/${tag}/`}
      sx={{
        bg: 'tagBg',
        color: 'tagFg',
        borderRadius: '0.3rem',
        padding: '0.4rem',

        transition: 'background 0.1s ease-in',
        textDecoration: 'none',

        '&:hover': {
          bg: 'tagBgHover',
        },
      }}
    >
      {tag}
    </Link>
  );
}
