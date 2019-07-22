import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import DarkToggle from './DarkToggle';

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

  border-bottom: ${({ atTop }) =>
    atTop ? '1px solid var(--border)' : '1px solid var(--background)'};
  height: ${({ atTop }) => (atTop ? '3rem' : '3rem')};
  transition: height 0.2s ease-in, border 0.2s ease-in;

  // This is here for now as there is some z-index on codeblocks causing it to render ontop of the header
  z-index: 1000;

  // box-shadow: 0 4px 2px -2px var(--border);
`;

const Title = styled.span`
  font-size: 1.8rem;
  color: var(--bodyColor);
`;

function Header() {
  function scrollEvent() {
    const isAtTop = window.scrollY <= 0;
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
      <DarkToggle />
    </HeaderWrapper>
  );
}

export default Header;
