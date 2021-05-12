import React from 'react';
import { Link } from 'gatsby';
import { Themed, Flex, css } from 'theme-ui';
import FooterBlurb from './FooterBlurb';
import { PostProps } from '../utils/types';

interface Props {
  previous: PostProps;
  next: PostProps;
}

export default function BlogFooter({ next, previous }: Props): JSX.Element {
  return (
    <footer
      css={css({
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5rem',
      })}
    >
      {(previous || next) && (
        <Flex
          as="ul"
          css={css({
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          })}
        >
          <li>
            {previous && (
              <Themed.a as={Link} to={previous.slug} rel="prev">
                ← {previous.title}
              </Themed.a>
            )}
          </li>
          <li>
            {next && (
              <Themed.a as={Link} to={next.slug} rel="next">
                {next.title} →
              </Themed.a>
            )}
          </li>
        </Flex>
      )}
      <FooterBlurb />
    </footer>
  );
}
