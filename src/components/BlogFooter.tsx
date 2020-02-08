import React from 'react';
import { Link } from 'gatsby';
import { Styled, Flex, css } from 'theme-ui';
import { FaArrowLeft } from 'react-icons/fa';
import styled from '@emotion/styled';
import FooterBlurb from './FooterBlurb';
import { PostProps } from '../utils/types';

const Footer = styled.footer`
  display: flex:
  flex-direction: row;
`;

interface Props {
  previous: PostProps;
  next: PostProps;
}

export default function BlogFooter({ next, previous }: Props) {
  return (
    <Footer>
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
    </Footer>
  );
}
