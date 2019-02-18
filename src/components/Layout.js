import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import SocialBlock from './SocialBlock';
import mq from '../utils/responsive';
import { getColorSchemeName } from '../utils/colors';
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
  state = {
    currentColorScheme: getColorSchemeName(),
  };

  constructor(props) {
    super(props);
    this.onToggleColorScheme = this.onToggleColorScheme.bind(this);
  }

  componentDidMount() {
    if (document) {
      document.querySelector('body').style.transition =
        'color 0.2s ease-out, background 0.2s ease-out';
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('storage', updateColorScheme);
  }

  onToggleColorScheme() {
    this.setState({
      currentColorScheme: getColorSchemeName(),
    });
  }

  render() {
    const { children } = this.props;
    const { currentColorScheme } = this.state;

    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');
      if (currentColorScheme === 'dark') {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
    }

    return (
      <SiteWrapper>
        <GlobalStyles />
        <Header />
        <ProfilePicture />
        <SocialBlock onToggleColorScheme={this.onToggleColorScheme} />
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
