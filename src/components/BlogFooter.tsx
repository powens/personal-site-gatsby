import React from 'react';
import { Link } from 'gatsby';
import { Styled, Flex, css } from 'theme-ui';
import FooterBlurb from './FooterBlurb';
import { PostProps } from '../utils/types';

interface Props {
  previous: PostProps;
  next: PostProps;
}

export default function BlogFooter({ next, previous }: Props) {
  return (
    <footer
      css={css({
        display: 'flex',
        flexDirection: 'column',
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
              <Styled.a as={Link} to={previous.slug} rel="prev">
                ← {previous.title}
              </Styled.a>
            )}
          </li>
          <li>
            {next && (
              <Styled.a as={Link} to={next.slug} rel="next">
                {next.title} →
              </Styled.a>
            )}
          </li>
        </Flex>
      )}
      <FooterBlurb />
    </footer>
  );
}
