import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Styled } from 'theme-ui';
import mq from '../utils/responsive';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import SEO from './SEO';

require('prismjs/themes/prism-tomorrow.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

const SiteWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;

  grid-template-areas:
    'header'
    'content';

  min-width: 0;

  margin-left: 2rem;
  margin-right: 2rem;

  transition: color 0.2s ease-out, background 0.2s ease-out;

  ${mq.medium(css`
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'header header header'
      'blurb blurb blurb'
      'content content content';
  `)};
`;

const Content = styled.div`
  grid-area: content;
  min-width: 0;
  overflow: hidden;
`;

export interface Props {
  header?: boolean;
  children: ReactNode;
}

function Layout({ header = true, children }: Props) {
  return (
    <Styled.root>
      <SiteWrapper>
        <SEO />
        <GlobalStyles />
        {header ? <Header /> : null}
        <Content>{children}</Content>
      </SiteWrapper>
    </Styled.root>
  );
}

export default Layout;
