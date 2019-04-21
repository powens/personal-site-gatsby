import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import SocialBlock from './SocialBlock';
import mq from '../utils/responsive';
import GlobalStyles from './GlobalStyles';

require('prismjs/themes/prism-tomorrow.css');

const SiteWrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;

  display: grid;
  grid-gap: 1rem;

  grid-template-areas:
    'title'
    'pic'
    'social'
    'blurb'
    'content';

  min-width: 0;

  transition: color 0.2s ease-out, background 0.2s ease-out;

  ${mq.medium(css`
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'pic title social'
      'blurb blurb blurb'
      'content content content';
  `)};
`;

const Content = styled.div`
  grid-area: content;
  min-width: 0;
  overflow: hidden;
`;

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <SiteWrapper>
        <GlobalStyles />
        <Header />
        <ProfilePicture />
        <SocialBlock />
        <Content>{children}</Content>
      </SiteWrapper>
    );
  }
}

Template.propTypes = {
  children: PropTypes.node,
};

Template.defaultProps = {
  children: null,
};

export default Template;
