import React from 'react';
import { Link } from 'gatsby';
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
      <Link to="/posts">
        <FaArrowLeft /> Back to posts
      </Link>
      <FooterBlurb />
    </Footer>
  );
}
