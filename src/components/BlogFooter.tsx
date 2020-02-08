import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import { FaArrowLeft } from 'react-icons/fa';
import styled from '@emotion/styled';
import FooterBlurb from './FooterBlurb';

const Footer = styled.footer`
  display: flex:
  flex-direction: row;
`;

export default function BlogFooter() {
  return (
    <Footer>
      <Styled.a to="/" as={Link}>
        <FaArrowLeft /> Back to posts
      </Styled.a>
      <FooterBlurb />
    </Footer>
  );
}
