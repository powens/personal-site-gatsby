import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import DarkToggle from './DarkToggle';
import SocialBlock from './SocialBlock';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 0.4rem 0;
  background-color: var(--background);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  grid-area: header;

  border-bottom: ${({ atTop }) => (atTop ? '1px solid var(--border)' : '')};
  height: ${({ atTop }) => (atTop ? '4rem' : '5rem')};
  transition: height 0.2s ease-in, border 0.2s ease-in;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  // color: var(--bodyColor);
`;

function Header() {
  function scrollEvent() {
    const isAtTop = window.scrollY === 0;
    setMinified(!isAtTop);
  }

  const [minified, setMinified] = useState(false);
  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', scrollEvent);
    }

    return () => {
      if (window) {
        window.removeEventListener('scroll', scrollEvent);
      }
    };
  }, []);

  return (
    <HeaderWrapper atTop={minified}>
      <Link to="/">
        <Title>Patrick Owens</Title>
      </Link>
      {/* <SocialBlock /> */}
      <DarkToggle />
    </HeaderWrapper>
  );
}

export default Header;
